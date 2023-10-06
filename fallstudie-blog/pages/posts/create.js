import React, { useReducer, useState } from "react";
import Link from "next/link";
import PostForm from "@components/PostForm";

export default function IndexPage() {
  const router = useRouter()
  const { id } = router.query

  return (
      <div>
        <h1>Create new Post</h1>
            <p>
              <Link href="../">Home</Link>
            </p>
          <PostForm />
      </div>
  )
}