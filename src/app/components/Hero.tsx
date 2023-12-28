import React from 'react'

function Hero() {
  return (
    <div className="hero min-h-screen bg-slate-300" >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-blue-500">Registrate ahora</h1>
      <p className="py-6 text-gray-800">Nuevos caminos para tu trabajo</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-blue-500">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered gray-400" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-blue-500">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered placeholder-gray-400
          " required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn" style={{ backgroundColor: 'blue', color: 'white' }}>Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Hero