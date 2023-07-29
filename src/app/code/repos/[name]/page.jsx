import React from 'react'
import Link from 'next/link'
import Repo from '../../../components/Repo'
import { Suspense } from 'react'
import RepoDirs from '@/app/components/RepoDirs'
const RepoPage = ({params: {name}}) => {
  return (
    <div className="card">
      <Link href="/code/repos" className='btn btn-back'>
        Back To Repositories</Link>
        <Suspense fallback={<div>Loading repo..</div>}>
        <Repo name={name} />
        </Suspense>
        <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
        </Suspense>
    </div>
  )
}

export default RepoPage