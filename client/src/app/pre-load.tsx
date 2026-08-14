"use client";

import { Spinner } from '@/components/ui/spinner'
import React from 'react'

function PreLoaderPage() {
  return (
    <div className="w-full h-dvh flex justify-center items-center gap-6">
        <Spinner className="size-6" />
    </div>
  )
}

export default PreLoaderPage