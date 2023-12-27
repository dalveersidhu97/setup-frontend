import { Categories, Categories2 } from '@/components/categories';
import { Suspense } from 'react';

export default async function Home () {
  
  return (
    <main className='flex flex-col gap-4'>
      <Suspense fallback={<div>...loading categories</div>}>
        <Categories></Categories>
      </Suspense>
      <Suspense fallback={<div>...loading categories 2</div>}>
        <Categories2></Categories2>
      </Suspense>
    </main>
  )
}
