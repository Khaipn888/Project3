import BackToTopButton from "../components/BackToTopButton";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import SlickSlider from "../components/SlickSlider";
import "../assets/styles/homeStyles.css";
import PostInstance from "../components/PostInstance";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts, getPostsLimit } from "../store/actions";
import PostPDInstance from "../components/PostPDInstance";

function Home() {
  const dispatch = useDispatch();
  const { posts, count } = useSelector((state) => state.post);
  const category = {
    CTPT: "Cho thuê phòng trọ",
    TNOG: "Tìm người ở ghép",
    PD: "Pass đồ",
  };
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="">
      <Header />
      <div className="slider rounded-lg relative top-[20px] ">
        <SlickSlider />
      </div>
      <div className="new-news max-w-[50%] ml-[100px] mt-[150px]">
        <div className=" font-bold text-[25px]">
          <h2>Tin cho thuê trọ mới nhất</h2>
        </div>
        <hr />
        <br />
        <div className="">
          {posts?.length > 0 &&
            posts
              .filter((item) => item.category === category.CTPT)
              .slice(0, 3)
              .map((item) => (
                <div className=" h-[180px] mb-5 ">
                  <PostInstance
                    key={item.id}
                    title={item?.title}
                    thumbnail={item?.thumbnail}
                    price={item?.price}
                    area={item?.area}
                    date={item?.createdAt}
                    address={item?.address}
                    numImage={JSON?.parse(item?.images.image).length}
                    province={item?.province}
                    district={item?.district}
                    ward={item?.ward}
                  />
                </div>
              ))}
        </div>
      </div>
      <div className="new-news max-w-[50%] ml-[100px] mt-[100px]">
        <div className=" font-bold text-[25px]">
          <h2>Tin tìm người ở ghép mới nhất</h2>
        </div>
        <hr />
        <br />
        <div className="gap-y-4">
          {posts?.length > 0 &&
            posts
              .filter((item) => item.category === category.TNOG)
              .slice(0, 3)
              .map((item) => (
                <div className=" h-[180px] mb-5 ">
                  <PostInstance
                    key={item.id}
                    title={item?.title}
                    thumbnail={item?.thumbnail}
                    price={item?.price}
                    area={item?.area}
                    date={item?.createdAt}
                    address={item?.address}
                    numImage={JSON?.parse(item?.images.image).length}
                    province={item?.province}
                    district={item?.district}
                    ward={item?.ward}
                  />
                </div>
              ))}
        </div>
      </div>

      <div className="new-news w-[90%] ml-[100px] mt-[100px]">
        <div className=" font-bold text-[25px]">
          <h2>Tin Pass đồ </h2>
        </div>
        <hr />
        <br />
        <div className=" grid grid-cols-5 w-full gap-x-5">
          {posts?.length > 0 &&
            posts
              .filter((item) => item.category === null)
              .slice(0, 5)
              .map((item) => (
                <div className=" max-w-[100%] min-w-[90%] h-[350px] ">
                  <PostPDInstance
                    key={item.id}
                    title={item?.title}
                    thumbnail={item?.thumbnail}
                    price={item?.price}
                    area={item?.area}
                    date={item?.createdAt}
                    address={item?.address}
                    numImage={JSON?.parse(item?.images.image).length}
                    province={item?.province}
                    district={item?.district}
                    ward={item?.ward}
                  />
                </div>
              ))}
        </div>
      </div>

      <div className="h-[100px]"></div>
      <BackToTopButton />
      <Footer />
    </div>
  );
}
export default Home;
