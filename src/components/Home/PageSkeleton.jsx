import React from 'react';

const SkeletonBlock = ({ className = '' }) => (
  <div className={`animate-pulse rounded bg-slate-200 dark:bg-slate-800 ${className}`} />
);

const PageSkeleton = () => {
  return (
    <main
      className='min-h-screen px-5 py-4 text-slate-700 dark:text-slate-300'
      aria-busy='true'
      aria-label='Loading portfolio'
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between py-3'>
        <SkeletonBlock className='h-8 w-20' />
        <div className='hidden gap-6 md:flex'>
          <SkeletonBlock className='h-4 w-16' />
          <SkeletonBlock className='h-4 w-16' />
          <SkeletonBlock className='h-4 w-16' />
          <SkeletonBlock className='h-4 w-16' />
        </div>
        <SkeletonBlock className='h-10 w-10 rounded-full' />
      </div>

      <section className='mx-auto max-w-5xl py-14 text-center'>
        <SkeletonBlock className='mx-auto h-5 w-36' />
        <SkeletonBlock className='mx-auto mt-5 h-12 w-3/4 max-w-xl' />
        <SkeletonBlock className='mx-auto mt-5 h-5 w-full max-w-2xl' />
        <SkeletonBlock className='mx-auto mt-3 h-5 w-5/6 max-w-xl' />
        <div className='mt-8 flex justify-center gap-4'>
          <SkeletonBlock className='h-12 w-32' />
          <SkeletonBlock className='h-12 w-32' />
        </div>
        <SkeletonBlock className='mx-auto mt-14 h-64 w-64 rounded-full md:h-80 md:w-80' />
      </section>

      <section className='mx-auto max-w-6xl py-10'>
        <SkeletonBlock className='mx-auto h-9 w-64' />
        <SkeletonBlock className='mx-auto mt-4 h-5 w-full max-w-2xl' />
        <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
          {Array.from({ length: 8 }, (_, index) => (
            <SkeletonBlock key={index} className='h-16 w-full' />
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-6xl py-10'>
        <SkeletonBlock className='mx-auto h-9 w-48' />
        <SkeletonBlock className='mx-auto mt-5 h-5 w-full max-w-3xl' />
        <SkeletonBlock className='mx-auto mt-3 h-5 w-full max-w-2xl' />
      </section>

      <section className='mx-auto max-w-6xl py-10'>
        <SkeletonBlock className='mx-auto h-10 w-72' />
        <div className='mt-10 grid gap-8 md:grid-cols-2'>
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className='overflow-hidden rounded-lg'>
              <SkeletonBlock className='h-48 w-full rounded-none' />
              <div className='space-y-4 p-5'>
                <SkeletonBlock className='h-7 w-3/4' />
                <SkeletonBlock className='h-4 w-full' />
                <SkeletonBlock className='h-4 w-5/6' />
                <div className='flex gap-2'>
                  <SkeletonBlock className='h-6 w-16 rounded-full' />
                  <SkeletonBlock className='h-6 w-16 rounded-full' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='mx-auto max-w-6xl py-10'>
        <SkeletonBlock className='mx-auto h-10 w-80' />
        <div className='mt-10 grid gap-10 md:grid-cols-2'>
          <div className='space-y-5'>
            <SkeletonBlock className='h-6 w-3/4' />
            <SkeletonBlock className='h-4 w-full' />
            <SkeletonBlock className='h-4 w-5/6' />
            <SkeletonBlock className='h-4 w-full' />
          </div>
          <div className='space-y-5'>
            <SkeletonBlock className='h-6 w-3/4' />
            <SkeletonBlock className='h-4 w-full' />
            <SkeletonBlock className='h-4 w-5/6' />
            <SkeletonBlock className='h-4 w-full' />
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-4xl py-10 text-center'>
        <SkeletonBlock className='mx-auto h-10 w-64' />
        <SkeletonBlock className='mx-auto mt-5 h-5 w-full max-w-xl' />
        <div className='mt-8 flex justify-center gap-4'>
          <SkeletonBlock className='h-12 w-32' />
          <SkeletonBlock className='h-12 w-32' />
          <SkeletonBlock className='h-12 w-32' />
        </div>
      </section>
    </main>
  );
};

export default PageSkeleton;
