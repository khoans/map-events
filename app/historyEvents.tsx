import { HistoricalEvent } from "./Components/MapsApp";

const eventsData: HistoricalEvent[] = [
  {
    id: 1,
    title: "Thành lập nước Việt Nam Dân chủ Cộng hòa",
    description: "Sự kiện quan trọng trong lịch sử Việt Nam.",
    position: [21.028, 105.854],
    category: "Lịch sử quốc gia",
  },
  {
    id: 2,
    title: "Chiến tranh Việt Nam thứ hai (1955-1975)",
    description: "Cuộc chiến tranh kéo dài giai đoạn dài tại Việt Nam.",
    position: [14.0583, 108.2772],
    category: "Chiến tranh",
  },
  {
    id: 3,
    title: "Khám phá Hạ Long Bay",
    description: "Hạ Long Bay - Di sản thế giới của UNESCO.",
    position: [20.9101, 107.1839],
    category: "Địa danh",
  },
  {
    id: 4,
    title: "Việt Nam gia nhập Liên Hợp Quốc",
    description: "Sự kiện quốc tế quan trọng cho Việt Nam.",
    position: [14.0583, 108.2772],
    category: "Lịch sử quốc gia",
  },
  {
    id: 5,
    title: "Cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân 1968",
    description: "Chiến sự quan trọng trong Chiến tranh Việt Nam.",
    position: [16.4066, 107.2902],
    category: "Chiến tranh",
  },
  {
    id: 6,
    title: "Di tích Thành cổ Huế",
    description: "Di tích lịch sử và văn hóa ở Huế, Việt Nam.",
    position: [16.4498, 107.5624],
    category: "Địa danh",
  },
  {
    id: 7,
    title: "Cách mạng Tháng Tám 1945",
    description: "Sự kiện quan trọng đánh dấu cuộc Cách mạng Tháng Tám.",
    position: [10.776, 106.7],
    category: "Lịch sử quốc gia",
  },
  {
    id: 8,
    title: "Chiến tranh Việt Nam thứ nhất (1946-1954)",
    description: "Cuộc chiến tranh giữa Việt Minh và Pháp.",
    position: [20.9956, 105.8122],
    category: "Chiến tranh",
  },
  {
    id: 9,
    title: "Vịnh Hạ Long được UNESCO công nhận là di sản thế giới",
    description: "Hạ Long Bay - Di sản thế giới nổi tiếng.",
    position: [20.9101, 107.1839],
    category: "Địa danh",
  },
  {
    id: 10,
    title: "Chiến dịch Hồ Chí Minh trên đường Trường Sơn",
    description: "Chiến dịch quan trọng trong Chiến tranh Việt Nam.",
    position: [16.0749, 107.5134],
    category: "Chiến tranh",
  },
  {
    id: 11,
    title: "Thành lập Đảng Nhân dân Việt Nam",
    description:
      "Sự kiện quan trọng đánh dấu sự ra đời của Đảng Cộng sản Việt Nam.",
    position: [21.028, 105.854],
    category: "Lịch sử quốc gia",
  },
  {
    id: 12,
    title: "Việt Nam độc lập và thống nhất",
    description: "Sự kiện quan trọng đánh dấu độc lập và thống nhất đất nước.",
    position: [14.0583, 108.2772],
    category: "Lịch sử quốc gia",
  },
  {
    id: 13,
    title: "Khám phá Vũ trụ bằng Vệ tinh VNREDSat-1",
    description: "Việt Nam phóng thành công vệ tinh VNREDSat-1 vào năm 2013.",
    position: [21.028, 105.854],
    category: "Khoa học",
  },
  {
    id: 14,
    title: "Đền Hùng - Kỷ niệm ngày lễ lớn của dân tộc Việt Nam",
    description: "Ngày lễ tôn vinh các vị anh hùng, vua Hùng.",
    position: [20.975, 105.55],
    category: "Lịch sử quốc gia",
  },
  {
    id: 15,
    title: "Sự kiện Sài Gòn 30/4/1975",
    description: "Thống nhất thành phố Sài Gòn vào ngày 30/4/1975.",
    position: [10.776, 106.7],
    category: "Chiến tranh",
  },
  {
    id: 16,
    title: "Thành lập Đảng Cộng sản Việt Nam",
    description:
      "Đảng Cộng sản Việt Nam được thành lập tại Hà Nội vào ngày 3/2/1930.",
    position: [21.028, 105.854],
    category: "Lịch sử quốc gia",
  },
  {
    id: 17,
    title: "Bắc thuộc lần thứ nhất (111 BC)",
    description:
      "Bắc thuộc lần đầu tiên khi Đế quốc Hán chiếm đóng và sáp nhập Âu Lạc vào lãnh thổ của mình.",
    position: [21.028, 105.854],
    category: "Lịch sử quốc gia",
  },
  {
    id: 18,
    title: "Khởi nghĩa Hai Bà Trưng (AD 40)",
    description:
      "Khởi nghĩa chống lại sự cai trị của nhà Hán do Hai Bà Trưng lãnh đạo, một biểu tượng của lòng yêu nước.",
    position: [21.028, 105.854],
    category: "Lịch sử quốc gia",
  },
  {
    id: 19,
    title: "Khởi nghĩa Nghệ Tĩnh (1930-1931)",
    description:
      "Một trong những cuộc khởi nghĩa lớn nhất của nông dân chống lại thực dân Pháp, do Đảng Cộng sản Việt Nam lãnh đạo.",
    position: [18.6667, 105.6667],
    category: "Chiến tranh",
  },
  {
    id: 20,
    title: "Hội nghị Điện Biên Phủ (1954)",
    description:
      "Hội nghị chấm dứt chiến tranh Đông Dương, sau chiến thắng lịch sử tại Điện Biên Phủ.",
    position: [21.388, 103.016],
    category: "Lịch sử quốc gia",
  },
  {
    id: 21,
    title: "Hiệp định Paris về Việt Nam (1973)",
    description:
      "Hiệp định nhằm thiết lập hòa bình ở Việt Nam và chấm dứt sự tham gia của Hoa Kỳ trong chiến tranh Việt Nam.",
    position: [48.8566, 2.3522],
    category: "Chiến tranh",
  },
  {
    id: 22,
    title: "Việt Nam trở thành thành viên của ASEAN (1995)",
    description:
      "Việt Nam gia nhập Hiệp hội các quốc gia Đông Nam Á, mở rộng quan hệ đối ngoại và hợp tác kinh tế.",
    position: [14.0583, 108.2772],
    category: "Quan hệ quốc tế",
  },
  {
    id: 23,
    title: "Sự kiện 500 năm Thăng Long - Hà Nội (2010)",
    description:
      "Kỷ niệm 1000 năm thành lập Thăng Long - Hà Nội, tiền thân của thủ đô hiện đại.",
    position: [21.028, 105.854],
    category: "Văn hóa - Xã hội",
  },
  {
    id: 24,
    title: "Việt Nam đăng cai Hội nghị Thượng đỉnh APEC 2017",
    description:
      "Hội nghị cấp cao kinh tế châu Á - Thái Bình Dương, thể hiện vai trò và vị thế của Việt Nam trên trường quốc tế.",
    position: [21.028, 105.854],
    category: "Quan hệ quốc tế",
  },
  {
    id: 25,
    title: "Dịch COVID-19 tại Việt Nam (2020-)",
    description:
      "Phản ứng và quản lý dịch bệnh COVID-19, bao gồm các biện pháp phong tỏa và chiến dịch tiêm chủng quốc gia.",
    position: [21.028, 105.854],
    category: "Sức khỏe - Y tế",
  },
  {
    id: 26,
    title: "Hoàng Sa - Lãnh thổ không thể tách rời của Việt Nam",
    description: "Hoàng Sa của Việt Nam",
    position: [16.3333, 112.0],
    category: "Lãnh thổ",
  },
  {
    id: 27,
    title: "Trường Sa - Biểu tượng của chủ quyền Việt Nam",
    description: "Trường Sa của Việt Nam",
    position: [11.0, 114.0],
    category: "Lãnh thổ",
  },
  {
    id: 28,
    title: "Khai mạc Đại lễ 1000 năm Thăng Long (2010)",
    description:
      "Đánh dấu 1000 năm lịch sử của Thăng Long - Hà Nội, tổ chức các hoạt động kỷ niệm quy mô lớn.",
    position: [21.028, 105.854],
    category: "Lịch sử quốc gia",
  },
  {
    id: 29,
    title: "Việt Nam tổ chức SEA Games 22 (2003)",
    description:
      "Việt Nam là nước chủ nhà của SEA Games lần thứ 22, tổ chức thành công các môn thi đấu.",
    position: [21.028, 105.854],
    category: "Thể thao",
  },
  {
    id: 30,
    title: "Cầu Hiền Lương - Biểu tượng của sự chia cắt và hòa bình",
    description:
      "Cầu Hiền Lương trên sông Bến Hải, biên giới chia cắt miền Bắc và miền Nam trong chiến tranh Việt Nam.",
    position: [16.7394, 107.0853],
    category: "Lịch sử quốc gia",
  },
  {
    id: 31,
    title: "Lễ hội Tết Nguyên Đán - Tết cổ truyền của người Việt",
    description:
      "Tết Nguyên Đán, lễ hội lớn nhất và quan trọng nhất, đánh dấu sự bắt đầu của một năm mới.",
    position: [21.028, 105.854],
    category: "Văn hóa - Xã hội",
  },
  {
    id: 32,
    title: "Lễ hội Áo dài Hà Nội (2016)",
    description:
      "Tôn vinh vẻ đẹp và giá trị văn hóa của chiếc Áo dài Việt Nam.",
    position: [21.028, 105.854],
    category: "Văn hóa - Xã hội",
  },
  {
    id: 33,
    title: "Việt Nam giành HCV Olympic lần đầu tiên (2016)",
    description:
      "Hoàng Xuân Vinh giành HCV bắn súng tại Olympic Rio 2016, chiếc HCV Olympic đầu tiên trong lịch sử Việt Nam.",
    position: [-22.9068, -43.1729],
    category: "Thể thao",
  },
  {
    id: 34,
    title: "Việt Nam tham gia lực lượng gìn giữ hòa bình Liên Hợp Quốc",
    description:
      "Đánh dấu sự tham gia tích cực của Việt Nam trong hoạt động gìn giữ hòa bình quốc tế.",
    position: [21.028, 105.854],
    category: "Quan hệ quốc tế",
  },
  {
    id: 35,
    title:
      "Đề cử Vịnh Hạ Long là một trong 7 kỳ quan thiên nhiên mới của thế giới (2011)",
    description:
      "Vịnh Hạ Long được công nhận là một trong 7 kỳ quan thiên nhiên mới của thế giới.",
    position: [20.9101, 107.1839],
    category: "Địa danh",
  },
];

export default eventsData;
