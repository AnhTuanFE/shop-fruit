import { memo } from "react";

const arrayInfo = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/1161/1161388.png",
    label: "Bảo hành trọn đời",
    content: "Trên toàn hệ thống",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/9183/9183512.png",
    label: "Đổi trả trong 365 ngày",
    content: "Nếu không hài lòng",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/5511/5511413.png",
    label: "Hàng chính hãng 100%",
    content: "Hoàn tiền nếu phát hiện hàng giả",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/10840/10840897.png",
    label: "Hoàn tiền 100%",
    content: "Nếu sản phẩm gặp lỗi",
  },
];

function Footer() {
  return (
    <div className="">
      <div className="bg-white">
        <hr />
        <div className=" row col-lg-12 col-md-12 mx-3 flex flex-wrap justify-around">
          {arrayInfo.map((item, index) => {
            return (
              <div
                key={index}
                className="col-lg-3 col-md-6 flex items-center max-md:w-full max-md:py-4 md:py-5"
              >
                <div className=" flex w-[30%] justify-center">
                  <img
                    className=" max-md:h-[50px] md:h-[80px]"
                    src={item.image}
                  />
                </div>
                <div className="mt-3 max-md:ml-0 md:ml-2">
                  <p className="text-xl font-medium">{item.label}</p>
                  <p className="text-base font-extralight text-slate-500">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default memo(Footer);
