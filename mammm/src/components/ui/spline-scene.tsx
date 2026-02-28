'use client'

import { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <span className="text-neutral-400 text-sm block">
          Načítám 3D scénu...
        </span>
      </div>
    </div>
  ),
}) as any

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-neutral-50">
        <span className="text-neutral-300 text-sm animate-pulse">
          Připravuji 3D model...
        </span>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-neutral-50">
        <span className="text-neutral-400 text-sm">
          3D model se nepodařilo načíst
        </span>
      </div>
    );
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-neutral-50">
          <span className="text-neutral-300 text-sm animate-pulse">
            Načítám...
          </span>
        </div>
      }
    >
      <Spline 
        scene={scene} 
        className={className}
        renderOnDemand={true}
        onLoad={() => console.log('Spline loaded')}
        onError={(error: any) => {
          console.error('Spline error:', error);
          setHasError(true);
        }}
      />
    </Suspense>
  )
}