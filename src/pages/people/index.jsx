import React from 'react'
import Layout from '../../components/Layout/Layout'

const index = ({ data }) => {
	return ( 
	<Layout>
		<div className="container">
                  <h2>People</h2>
                  <div className="grid grid-cols-6 gap-2 h-64">
                        <div className="shadow-2xl rounded-lg">
                              <div className="text-center p-4">
                                    <img className="mx-auto w-24 rounded-full border-black border-solid border-2" src="/imgs/wello6143.jpg"/>
                                    <p className="text-xl pt-2 mb-0">Dang Trung Nhan</p>
                                    <p className="text-xs">Founder</p>
                                    <p className="mb-0">Projects</p>
                                    <ul className="list-none">
                                          <li className="text-sm">Wavey</li>
                                    </ul>
                              </div>
                        </div>
                        <div className="shadow-2xl rounded-lg">
                              <div className="text-center p-4">
                                    <img className="mx-auto w-24 rounded-full border-black border-solid border-2" src="/imgs/dong.png"/>
                                    <p className="text-xl pt-2 mb-0">Duong Tieu Dong</p>
                                    <p className="text-xs">Co-Founder</p>
                                    <p className="mb-0">Projects</p>
                                    <ul className="list-none">
                                          <li className="text-sm">Image Dongeon</li>
                                    </ul>
                              </div>
                        </div>
                        <div className="shadow-2xl rounded-lg">
                              <div className="text-center p-4">
                                    <img className="mx-auto w-24 rounded-full border-black border-solid border-2" src="/imgs/hmtheboy154.png"/>
                                    <p className="text-xl pt-2 mb-0">Bui Huy Minh</p>
                                    <p className="text-xs">Co-Founder</p>
                                    <p className="mb-0">Projects</p>
                                    <ul className="list-none">
                                          <li className="text-sm">Darkmatter</li>
                                    </ul>
                              </div>
                        </div>
                  </div>
		</div>
	</Layout>
	)
}

export default index
