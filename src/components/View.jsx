import { Link } from "react-router-dom";

import data from "../products.json";
const View = ({}) => {
  return (
    <div>
      <div class=" ">
        <div class="w-full px-6 mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i + 14}>
              <div className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden">
                <div className="w-full md:h-[340px] relative">
                  <a href="/1020155?_id=1020155&amp;title=Headphones+Wireless&amp;brand=next&amp;category=Headphones&amp;description=Lorem+ipsum+dolor+sit+amet%2C+consectetur+adipisicing+elit.+Nulla+non+magni+facili+blanditiis+molestias+soluta+eveniet+illum+accusantium+eius+mollitia+eligendi%2C+ex+iste+doloribus+magnam.&amp;image=https%3A%2F%2Fi.ibb.co%2FzS3k6QB%2Fheadphone-1.webp&amp;isNew=true&amp;oldPrice=150&amp;price=103.2">
                    <img
                      alt="productImage"
                      loading="lazy"
                      width="300"
                      height="300"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                      src={data[i + 14].image}
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                    <span className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazonclone-yellow cursor-pointer duration-300">
                      <Link to={`/product/${i + 14}`} className="">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                      </Link>
                    </span>
                    <span className="w-full h-full flex items-center justify-center text-xl bg-transparent hover:bg-amazonclone-yellow cursor-pointer duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                      </svg>
                    </span>
                  </div>
                  <p className="absolute top-3 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                    !save <span>$46.80</span>
                  </p>
                </div>
                <hr />
                <div className="px-4 py-3 flex flex-col gap-1">
                  <p className="text-xs text-gray-500 tracking-wide">
                    Headphones
                  </p>
                  <p className="text-base font-medium">{data[i + 14].title}</p>
                  <p className="flex items-center gap-2">
                    <span className="text-sm line-through">
                      <span>$150.00</span>
                    </span>
                    <span className="text-amazon_blue font-semibold">
                      <span>$103.20</span>
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 text-justify">
                    {data[i + 14].description}
                  </p>{" "}
                  <Link to={`/product/${i + 14}`} className="">
                    <button className="h-10 font-medium w-full bg-amazonclone text-white rounded-md hover:bg-amazonclone-yellow duration-300 hover:text-black mt-2">
                      add to cart
                    </button>
                  </Link>
                </div>
              </div>{" "}
            </div>
          ))}
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i + 14}>
              <div className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden">
                <div className="w-full md:h-[340px] relative">
                  <a href="/1020155?_id=1020155&amp;title=Headphones+Wireless&amp;brand=next&amp;category=Headphones&amp;description=Lorem+ipsum+dolor+sit+amet%2C+consectetur+adipisicing+elit.+Nulla+non+magni+facili+blanditiis+molestias+soluta+eveniet+illum+accusantium+eius+mollitia+eligendi%2C+ex+iste+doloribus+magnam.&amp;image=https%3A%2F%2Fi.ibb.co%2FzS3k6QB%2Fheadphone-1.webp&amp;isNew=true&amp;oldPrice=150&amp;price=103.2">
                    <img
                      alt="productImage"
                      loading="lazy"
                      width="300"
                      height="300"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                      src={data[i + 14].image}
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                    <span className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazonclone-yellow cursor-pointer duration-300">
                      <Link to={`/product/${i + 14}`} className="">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                      </Link>
                    </span>
                    <span className="w-full h-full flex items-center justify-center text-xl bg-transparent hover:bg-amazonclone-yellow cursor-pointer duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                      </svg>
                    </span>
                  </div>
                  <p className="absolute top-3 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                    !save <span>$46.80</span>
                  </p>
                </div>
                <hr />
                <div className="px-4 py-3 flex flex-col gap-1">
                  <p className="text-xs text-gray-500 tracking-wide">
                    Headphones
                  </p>
                  <p className="text-base font-medium">{data[i + 14].title}</p>
                  <p className="flex items-center gap-2">
                    <span className="text-sm line-through">
                      <span>$150.00</span>
                    </span>
                    <span className="text-amazon_blue font-semibold">
                      <span>$103.20</span>
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 text-justify">
                    {data[i + 14].description}
                  </p>{" "}
                  <Link to={`/product/${i + 14}`} className="">
                    <button className="h-10 font-medium w-full bg-amazonclone text-white rounded-md hover:bg-amazonclone-yellow duration-300 hover:text-black mt-2">
                      add to cart
                    </button>
                  </Link>
                </div>
              </div>{" "}
            </div>
          ))}
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i + 14}>
              <div className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden">
                <div className="w-full md:h-[340px] relative">
                  <a href="/1020155?_id=1020155&amp;title=Headphones+Wireless&amp;brand=next&amp;category=Headphones&amp;description=Lorem+ipsum+dolor+sit+amet%2C+consectetur+adipisicing+elit.+Nulla+non+magni+facili+blanditiis+molestias+soluta+eveniet+illum+accusantium+eius+mollitia+eligendi%2C+ex+iste+doloribus+magnam.&amp;image=https%3A%2F%2Fi.ibb.co%2FzS3k6QB%2Fheadphone-1.webp&amp;isNew=true&amp;oldPrice=150&amp;price=103.2">
                    <img
                      alt="productImage"
                      loading="lazy"
                      width="300"
                      height="300"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                      src={data[i + 14].image}
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                    <span className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazonclone-yellow cursor-pointer duration-300">
                      <Link to={`/product/${i + 14}`} className="">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                      </Link>
                    </span>
                    <span className="w-full h-full flex items-center justify-center text-xl bg-transparent hover:bg-amazonclone-yellow cursor-pointer duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                      </svg>
                    </span>
                  </div>
                  <p className="absolute top-3 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                    !save <span>$46.80</span>
                  </p>
                </div>
                <hr />
                <div className="px-4 py-3 flex flex-col gap-1">
                  <p className="text-xs text-gray-500 tracking-wide">
                    Headphones
                  </p>
                  <p className="text-base font-medium">{data[i + 14].title}</p>
                  <p className="flex items-center gap-2">
                    <span className="text-sm line-through">
                      <span>$150.00</span>
                    </span>
                    <span className="text-amazon_blue font-semibold">
                      <span>$103.20</span>
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 text-justify">
                    {data[i + 14].description}
                  </p>{" "}
                  <Link to={`/product/${i + 14}`} className="">
                    <button className="h-10 font-medium w-full bg-amazonclone text-white rounded-md hover:bg-amazonclone-yellow duration-300 hover:text-black mt-2">
                      add to cart
                    </button>
                  </Link>
                </div>
              </div>{" "}
            </div>
          ))}
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i + 14}>
              <div className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden">
                <div className="w-full md:h-[340px] relative">
                  <a href="/1020155?_id=1020155&amp;title=Headphones+Wireless&amp;brand=next&amp;category=Headphones&amp;description=Lorem+ipsum+dolor+sit+amet%2C+consectetur+adipisicing+elit.+Nulla+non+magni+facili+blanditiis+molestias+soluta+eveniet+illum+accusantium+eius+mollitia+eligendi%2C+ex+iste+doloribus+magnam.&amp;image=https%3A%2F%2Fi.ibb.co%2FzS3k6QB%2Fheadphone-1.webp&amp;isNew=true&amp;oldPrice=150&amp;price=103.2">
                    <img
                      alt="productImage"
                      loading="lazy"
                      width="300"
                      height="300"
                      decoding="async"
                      data-nimg="1"
                      className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                      src={data[i + 14].image}
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                    <span className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazonclone-yellow cursor-pointer duration-300">
                      <Link to={`/product/${i + 14}`} className="">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                      </Link>
                    </span>
                    <span className="w-full h-full flex items-center justify-center text-xl bg-transparent hover:bg-amazonclone-yellow cursor-pointer duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                      </svg>
                    </span>
                  </div>
                  <p className="absolute top-3 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                    !save <span>$46.80</span>
                  </p>
                </div>
                <hr />
                <div className="px-4 py-3 flex flex-col gap-1">
                  <p className="text-xs text-gray-500 tracking-wide">
                    Headphones
                  </p>
                  <p className="text-base font-medium">{data[i + 14].title}</p>
                  <p className="flex items-center gap-2">
                    <span className="text-sm line-through">
                      <span>$150.00</span>
                    </span>
                    <span className="text-amazon_blue font-semibold">
                      <span>$103.20</span>
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 text-justify">
                    {data[i + 14].description}
                  </p>{" "}
                  <Link to={`/product/${i + 14}`} className="">
                    <button className="h-10 font-medium w-full bg-amazonclone text-white rounded-md hover:bg-amazonclone-yellow duration-300 hover:text-black mt-2">
                      add to cart
                    </button>
                  </Link>
                </div>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View;
