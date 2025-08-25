export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">页面未找到</h1>
        <p className="text-muted-foreground mb-4">您访问的页面不存在或已被移动。</p>
        <a href="/" className="underline">返回首页</a>
      </div>
    </main>
  )
}
