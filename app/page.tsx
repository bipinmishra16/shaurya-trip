import MyGallery from "@/components/MyGallery";
import MyProfile from "@/components/MyProfile";
import MySchool from "@/components/MySchool";

const Page = () => {
  return (
    <main>
      <div className="container mx-auto max-w-5xl px-2">
        <MyProfile />
        <MySchool />
        <MyGallery />
      </div>
    </main>
  );
};

export default Page;
