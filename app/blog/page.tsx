import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Spencer Tries Things Out',
  description: 'Giving it a whirl.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Spencer's Blog</h1>
      <BlogPosts />
    </section>
  )
}
