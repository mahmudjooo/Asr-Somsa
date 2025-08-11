export default function AboutSection() {
  return (
    <div className=" w-full bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <img
          width={300}
          src="https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-ti87-p-kartinki-samsa-na-prozrachnom-fone-3.png"
          alt="right"
          className=" animate-spin"
          style={{ animationDuration: "6s" }}
        />

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
            Zarborni somsa xonasi haqida
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Zarbor Somsa xonasi — bu an'anaviy uslubda pishirilgan mazali
            somsalar markazi. Biz har kuni minglab do‘stlarimizni tabiiy go‘sht,
            yangi xamir, va tajribali oshpazlar qo‘li bilan tayyorlangan
            somsalar bilan siylaymiz.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Mahsulotlarimiz sifati va ta'mi bizning faxrimizdir. Zarbor somsa
            xonasi — bu faqat ovqatlanish joyi emas, bu madaniyat, iliqlik va
            mehmondo‘stlik markazi.
          </p>
        </div>
      </div>
    </div>
  );
}
