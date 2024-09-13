function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="px-10 py-5 flex items-center justify-between">
        <a href="/" className="text-3xl font-bold text-red-500">NETFLEX</a>

        <a href="sign-up" className="text-sm">회원가입</a>
      </header>
      <main className="px-10 py-16">
        <section>
          <h2 className="text-xl font-semibold mb-7">현재 상영중인 영화</h2>

          <ul>
            <li>
              <a className="flex flex-col gap-y-5">
                {/* h-[180px]여기서 []는 내가 원하는 값이 준비가 되어있지 않을 때 값을 따로 만든다. */}
                <img className="w-80 h-[180px] bg-white" />
                <h5 className="text-lg font-medium ">제목</h5>
              </a>
              </li>
          </ul>
        </section>
        <section className="[&&]:mt-20">
          <h2 className="text-xl font-semibold mb-7">현재 상영중인 영화</h2>

          <ul>
            <li>
              <a className="flex flex-col gap-y-5">
                {/* h-[180px]여기서 []는 내가 원하는 값이 준비가 되어있지 않을 때 값을 따로 만든다. */}
                <img className="w-80 h-[180px] bg-white" />
                <h5 className="text-lg font-medium ">제목</h5>
              </a>
              </li>
          </ul>
        </section>
      </main>
    <h2 className="bg-black text-red-500"></h2>
    </div>
  )
}

export default App
