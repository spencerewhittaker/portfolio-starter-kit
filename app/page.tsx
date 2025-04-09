import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Spencer's Practice Run
      </h1>
      <p className="mb-4">
        {`As a 6'4 professional athlete I've rarely had the need to understand how technology works. 
       
        But now it's finally time to see how the other half lives. 
       
        I'm in the arena. I'm trying things.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
