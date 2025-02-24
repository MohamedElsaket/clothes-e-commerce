import Title from "./Title";

const ProductCommonComp = ({ children, text1, text2 }) => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={text1} text2={text2} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {children}
      </div>
    </div>
  );
};

export default ProductCommonComp;
