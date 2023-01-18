import Navbar2 from "../components/Navbar2";
import Product from "../components/Product";
import banner from "./assets/banner.jpg";

export default function Home() {
  return (
    <div className="bg-slate-200 pb-56">
      <Navbar2/>
      <div className=" max-w-[110rem]  mx-auto relative">
        <img className="" src={banner.src} />
        <div className=" absolute bg-gradient-to-t from-slate-200 to-transparent via-slate-200/50  bottom-0 z-10 w-full h-1/3 " />
      </div>
      <div className=" relative z-50">
        <div className="max-w-[110rem] -mt-80 z-50 ab  mx-auto gap-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <div>
            <Product
              showName 
              showPrice 
              name="MI Phone"
              price="250$"
              imgURL="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648!348x348.jpg?f=webp"
            />
          </div>
          <div>
            <Product
              showName 
              showPrice
              name="MI Phone"
              price="250$"
              imgURL="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648!348x348.jpg?f=webp"
            />
          </div>
          <div>
            <Product
              showName 
              showPrice 
              name="MI Phone"
              price="250$"
              imgURL="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648!348x348.jpg?f=webp"
            />
          </div>
          <div>
            <Product
              showName 
              showPrice 
              name="MI Phone"
              price="250$"
              imgURL="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648!348x348.jpg?f=webp"
            />
          </div>
        </div>
      </div>
      <div className=" flex overflow-x-scroll max-w-[110rem] mx-auto overflow-y-hidden p-4 space-x-2 ">
            <Product
              showName = {false}
              showPrice ={ false}
              name="MI Phone"
              price="250$"
              imgURL="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648!348x348.jpg?f=webp"
            />
      </div>
    </div>
  );
}