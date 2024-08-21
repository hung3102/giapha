// import "primeicons/primeicons.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.css";
// import "primeflex/primeflex.css";

import React, { useEffect, useState } from "react";
import OrganizationChart from "../components/ChartContainer";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Home() {
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    const process = async () => {
      await sleep(1000);

      const grade1 = document.getElementById("grade-1");
      grade1.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    };

    // process();
  }, []);

  const data: any = {
    "ĐÀO XUÂN KHẢI\nCẬP TỶ": {
      "ĐÀO XUÂN HUÂN\nTRẦN THỊ ĐANG\nTRẦN THỊ CHUYÊN": {
        INFO: "Chết bể ngày 20/10",
        "ĐÀO XUÂN CU": {
          INFO: "Trèo cây sung mất năm 12 tuổi",
        },
        "ĐÀO XUÂN HUY\nNGUYỄN THỊ NỮ": {
          INFO: "Truyện kể rằng ông Huy lúc giao thừa hỏi các cháu là đã sang canh chưa, con cháu nói sang rồi thì ông nói tao về với tổ tiên ông bà đây rồi ông mất.",
          "ĐÀO THỊ DẬU": false,
          "ĐÀO THỊ XIN": {
            INFO: "Là con nuôi của ông Huy",
          },
        },
        "ĐÀO XUÂN CƯỜM\nHOÀNG THỊ CÚC": {
          "ĐÀO THỊ NẠT": false,
          "ĐÀO THỊ XOAN": false,
          "ĐÀO XUÂN CAM": {
            "ĐÀO XUÂN NINH\nTRẦN THỊ THÀNH": {
              "ĐÀO XUÂN NAM\nTẠ THỊ HUỆ": {
                "ĐÀO XUÂN HÀ": false,
                "ĐÀO THỊ NGỌC": false,
                "ĐÀO THỊ NGA": false,
              },
              "ĐÀO XUÂN QUANG\nVƯƠNG THỊ HẢI": {
                "ĐÀO XUÂN QUÂN": false,
                "ĐÀO THỊ QUỲNH": false,
                "ĐÀO THỊ TRANG": false,
              },
            },
            "ĐÀO XUÂN PHỤC": {
              INFO: "Cùng với chú là ông Đìn đi dạ mất trên biển.",
            },
            "ĐÀO XUÂN XINH\nNGUYỄN THỊ XUÂN": {
              INFO: "Là con đẻ của ông Cam nhưng cho người khác làm con nuôi.",
              "ĐÀO THỊ TRÚC": false,
              "ĐÀO THỊ TÙNG": false,
              "ĐÀO XUÂN YÊN\nPHAN THỊ HẬU": {
                "ĐÀO XUÂN THIÊN": false,
                "ĐÀO THỊ THẢO": false,
              },
              "ĐÀO THỊ KIÊN": false,
              "ĐÀO THỊ MAI": false,
            },
            "ĐÀO THỊ HẠ": false,
          },
          "ĐÀO XUÂN ĐÌN\nCAO THỊ CHU\nPHẠM THỊ BÉ": {
            INFO: "Cùng với cháu là ông Phục đi dạ mất trên biển.",
            "ĐÀO XUÂN DƯƠNG": {
              INFO: "Là con của bà đầu, đi bộ đội rồi mất.",
            },
            "ĐÀO XUÂN ĐÀN\nĐẬU THỊ TƯ": {
              "ĐÀO XUÂN DŨNG\nNGUYỄN THỊ HƯƠNG": {
                "ĐÀO XUÂN TOÀN": false,
                "ĐÀO XUÂN TÙNG": false,
              },
              "ĐÀO XUÂN HẢI\nNGUYỄN THỊ QUỲNH": {
                "ĐÀO THỊ ANH": false,
                "ĐÀO XUÂN ANH": false,
                "ĐÀO THỊ HUYỀN": false,
              },
              "ĐÀO THỊ HÀ": false,
              "ĐÀO THỊ DUNG": false,
              "ĐÀO XUÂN CƯƠNG\nTRẦN THỊ THẢO": {
                "ĐÀO XUÂN MINH": false,
              },
            },
            "ĐÀO XUÂN SÁO\nNGUYỄN THỊ LÔ": {
              "ĐÀO THỊ GIANG": false,
              "ĐÀO XUÂN SƠN\nLÊ THỊ HIỆP": {
                "ĐÀO THỊ YẾN": false,
                "ĐÀO THỊ TRÂM": false,
                "ĐÀO XUÂN KHÔI": false,
              },
              "ĐÀO XUÂN TÀI": false,
            },
            "ĐÀO XUÂN NHỊ\nTHÁI THỊ TRÚC": {
              "ĐÀO THỊ NGUYỆT": false,
              "ĐÀO THỊ VINH": false,
              "ĐÀO THỊ HOA": false,
              "ĐÀO THỊ HIÊN": false,
              "ĐÀO XUÂN KIÊN": false,
            },
          },
          "ĐÀO XUÂN NGÕ\nĐẬU THỊ NỮ\nNGUYỄN THỊ DUYÊN": {
            "ĐÀO THỊ TÂM": false,
            "ĐÀO THỊ MINH": false,
            "ĐÀO THỊ QUYÊN": false,
            "ĐÀO THỊ CHÚC": false,
            "ĐÀO THỊ THANH": false,
            "ĐÀO XUÂN LONG": {
              INFO: "Ngã xuống giếng rồi mất.",
            },
            "ĐÀO THỊ MƠ": false,
            "ĐÀO THỊ HỒNG": false,
            "ĐÀO XUÂN ĐỨC\nTRẦN THỊ HƯỜNG": {
              INFO: "Là con của bà vợ sau.",
              "ĐÀO XUÂN NĂNG": false,
            },
          },
          "ĐÀO THỊ HO": false,
          "ĐÀO THỊ HẠT": false,
          "ĐÀO THỊ THẢN": false,
        },
        "ĐÀO XUÂN HƯỜM\nNGÔ THỊ THÊM": {
          "ĐÀO XUÂN THƯỜNG\nHOÀNG THỊ NGHÉ\nHOÀNG THỊ NĂM": {
            "ĐÀO XUÂN THƯƠNG\nPHẠM THỊ LỤC": {
              "ĐÀO THỊ NHUNG": false,
              "ĐÀO XUÂN HÙNG\nLÊ THỊ HIỀN": {
                "ĐÀO THỊ QUYÊN": false,
                "ĐÀO THỊ THẢO": false,
                "ĐÀO XUÂN TUẤN": false,
              },
              "ĐÀO XUÂN CƯỜNG\nTRƯƠNG THỊ NHUNG": {
                "ĐÀO XUÂN DUY": false,
                "ĐÀO THỊ TÂM": false,
              },
              "ĐÀO THỊ GIANG": false,
            },
            "ĐÀO THỊ HƯƠNG": false,
            "ĐÀO XUÂN DƯƠNG": {
              INFO: "Là bộ đội liệt sỹ.",
            },
            "ĐÀO XUÂN HỒNG\nPHẠM THỊ HOA": {
              INFO: "Mất khi đang đi dạ.",
              "ĐÀO THỊ HÀ": false,
              "ĐÀO XUÂN NAM\nTRẦN THỊ HẰNG": {
                "ĐÀO XUÂN BẮC": false,
                "ĐÀO THỊ BĂNG": false,
                "ĐÀO THỊ ANH": false,
              },
              "ĐÀO THỊ TRANG": false,
            },
            "ĐÀO XUÂN CẬY": {
              INFO: "Mất vì bom năm 1966",
            },
            "ĐÀO XUÂN BE\nTHÁI THỊ TỨ": {
              "ĐÀO THỊ NGA": false,
              "ĐÀO XUÂN DŨNG\nNGUYỄN THỊ HẰNG": {
                "ĐÀO THỊ VY": false,
                "ĐÀO THỊ CHI": false,
                "ĐÀO XUÂN KIÊN": false,
                "ĐÀO XUÂN AN": false,
              },
              "ĐÀO XUÂN KHÁNH": {
                "ĐÀO TRÂM ANH": false,
                "ĐÀO TÚ ANH": false,
              },
              "ĐÀO XUÂN QUANG\nTRẦN THỊ THẢO": {
                "ĐÀO XUÂN MINH": false,
                "ĐÀO THỊ LINH": false,
                "ĐÀO XUÂN HUY": false,
              },
              "ĐÀO THỊ PHƯƠNG": false,
            },
            "ĐÀO THỊ XUÂN": false,
            "ĐÀO THỊ LAN": {
              INFO: "Là con riêng ông Thường khi ông đi vận tải.",
            },
            "ĐÀO THỊ HUÊ": false,
            "ĐÀO XUÂN HẢI\nBÙI THỊ THẢO": {
              "ĐÀO THỊ LINH": false,
              "ĐÀO XUÂN HOÀNG": false,
            },
          },
          "ĐÀO THỊ PHƯƠNG": false,
          "ĐÀO THỊ PHI": false,
          "ĐÀO XUÂN QUY\nTRẦN THỊ NGÂN\nNGÔ THỊ VIỆT": {
            "ĐÀO XUÂN LY": {
              INFO: "Là bộ đội liệt sỹ.",
            },
            "ĐÀO XUÂN CHI": {
              INFO: "Là bộ đội liệt sỹ.",
            },
            "ĐÀO THỊ HẠNH": false,
            "ĐÀO THỊ DUYÊN": false,
            "ĐÀO XUÂN KÝ": false,
            "ĐÀO XUÂN THUỲ\nHOÀNG THỊ THUỲ": {
              "ĐÀO THỊ OANH": false,
              "ĐÀO THỊ THANH": false,
              "ĐÀO THỊ THƯ": false,
              "ĐÀO XUÂN ĐỨC": false,
              "ĐÀO XUÂN QUỲNH\nTRƯƠNG THỊ CHUNG": {
                "ĐÀO THỊ MY": false,
                "ĐÀO XUÂN KHÔI": false,
                "ĐÀO THỊ VY": false,
              },
            },
            "ĐÀO XUÂN CHUNG\nPHẠM THỊ LƯU": {
              "ĐÀO THỊ YẾN": false,
              "ĐÀO XUÂN PHÁT": false,
              "ĐÀO XUÂN ĐẠT": false,
            },
            "ĐÀO XUÂN LẬP\nĐÔNG THỊ PHƯƠNG": {
              INFO: "Mất vì tai nạn giao thông",
              "ĐÀO THỊ THOA": false,
              "ĐÀO THỊ KIỀU": false,
              "ĐÀO XUÂN CÔNG": false,
            },
            "ĐÀO THỊ LOAN": {
              INFO: "Mất lúc vài ba tuổi.",
            },
            "ĐÀO XUÂN HÙNG\nNGUYỄN THỊ PHƯƠNG": {
              "ĐÀO THỊ AN": false,
              "ĐÀO XUÂN MINH": false,
            },
            "ĐÀO XUÂN QUÝ\nTRẦN THỊ HỒNG": {
              "ĐÀO THỊ ANH": false,
              "ĐÀO XUÂN KHÁNH": false,
            },
            "ĐÀO XUÂN BIỂU": false,
            "ĐÀO THỊ TỨC": false,
            "ĐÀO THỊ NGỌC": false,
          },
          "ĐÀO THỊ XỨNG": false,
          "ĐÀO THỊ PHƯỢNG": false,
        },
        "ĐÀO XUÂN KHÔI\nLÊ THỊ HỒNG": {
          INFO: "- Có một người con tên là Đào Thị Thí, ở giữa ông Đa và ông Đê, vì mất lúc nhỏ nên người xưa không đưa vào gia phả.\n- Có một người con tên Đào Xuân Xít là em ông Xanh bị mẹ ngủ đè phải con nên mất, còn nhỏ nên người xưa không cho vào gia phả.",
          "ĐÀO XUÂN ĐA\nLÊ THỊ TRẠI": {
            INFO: "- Có 3 con là Đào Xuân Nhất, Đào Xuân Kha trên ông Bình, và Đào Thị Côi trên bà Thương mất lúc 2-3 tuổi ko ghi vào gia phả.\n- Nói với con trai là ông Dương rằng mình không sống được bao lâu nữa dù còn khoẻ, 3 ngày sau thì ông mất.",
            "ĐÀO THỊ XIN": false,
            "ĐÀO XUÂN BÌNH\nTRẦN THỊ HOÈ": {
              "ĐÀO THỊ HUỆ": false,
              "ĐÀO THỊ LOAN": false,
              "ĐÀO THỊ PHƯỢNG": false,
              "ĐÀO THỊ HƯƠNG": false,
              "ĐÀO THỊ CÚC": false,
              "ĐÀO THỊ MAI": false,
              "ĐÀO THỊ THƠM": false,
              "ĐÀO THỊ NGOAN": false,
              "ĐÀO THỊ NGOÃN": false,
            },
            "ĐÀO XUÂN DƯƠNG\nHOÀNG THỊ THI": {
              INFO: "Vợ bị sẩy thai khi mang bầu đứa thứ 3 lúc mới 2-3 tháng",
              "ĐÀO XUÂN THÁI\nVŨ THỊ HOÀ": {
                "ĐÀO THỊ HIỀN": false,
                "ĐÀO XUÂN HÀ": false,
                "ĐÀO XUÂN TUẤN": false,
              },
              "ĐÀO XUÂN HỢI\nTRẦN THỊ NGA": {
                "ĐÀO XUÂN PHÁP": false,
                "ĐÀO XUÂN ANH": false,
                "ĐÀO THỊ NGÂN": false,
              },
              "ĐÀO XUÂN HÙNG\nNGUYỄN THỊ HÀ": {
                INFO: "Là người tạo ra trang web này :))",
                "ĐÀO TUẤN VŨ": false,
              },
              "ĐÀO XUÂN DŨNG\nHÒ THỊ HIỀN": {
                "ĐÀO THỊ TRÚC": false,
                "ĐÀO THỊ UYÊN": false,
              },
            },
            "ĐÀO THỊ THƯƠNG": false,
          },
          "ĐÀO XUÂN ĐÊ\nLỂ THỊ NẬM": {
            INFO: "- Ông Đê đẻ 2 đứa con đầu, 1 đứa có sừng, 1 đứa có đai trên đầu nên bố là ông Khôi sợ cho ném sông, vì vậy nên trời phạt con trai đầu chi gia đình ông Khôi không có con trai (không thật sự chính xác vì ông Cầu con ông Cát vẫn có con trai).\n- Mất vì bị đột quỵ.",
            "ĐÀO THỊ ĐỆ": false,
            "ĐÀO THỊ LIÊN": false,
            "ĐÀO XUÂN LỄ\nTRẦN THỊ DIÊN": {
              "ĐÀO THỊ NGA": false,
              "ĐÀO THỊ NHUNG": false,
              "ĐÀO THỊ HUỆ": false,
              "ĐÀO THỊ HIỀN": false,
              "ĐÀO THỊ AN": false,
            },
            "ĐÀO XUÂN MAI\nĐẬU THỊ PHƯỢNG": {
              INFO: "Cùng với bà Lai là 2 người sinh đôi.",
              "ĐÀO XUÂN CHIẾN\nVÕ THỊ QUỲNH": {
                "ĐÀO XUÂN ĐẠT": false,
                "ĐÀO XUÂN TÀI": false,
              },
              "ĐÀO XUÂN CƯỜNG\nTHÁI THỊ DUNG": {
                "ĐÀO XUÂN ĐÔ": false,
                "ĐÀO THỊ LÊ": false,
              },
              "ĐÀO XUÂN MẠNH\nBÙI THỊ TRANG": {
                "ĐÀO THỊ Ý": false,
                "ĐÀO XUÂN SANG": false,
              },
              "ĐÀO XUÂN BỀN\nTHÁI THỊ THUỲ": {
                "ĐÀO XUÂN BẢO": false,
                "ĐÀO THỊ LINH": false,
              },
            },
            "ĐÀO THỊ LAI": {
              INFO: "Cùng với ông Mai là 2 người sinh đôi.",
            },
            "ĐÀO XUÂN THẮNG\nPHẠM THỊ BẢY": {
              "ĐÀO XUÂN CỦA\nHỒ THỊ HƯƠNG": {
                "ĐÀO XUÂN HOÀNG": false,
                "ĐÀO XUÂN ĐĂNG": false,
              },
              "ĐÀO XUÂN PHỤNG": false,
              "ĐÀO THỊ MY": false,
            },
          },
          "ĐÀO THỊ TOA": false,
          "ĐÀO XUÂN CÁT\nĐẶNG THỊ NHIÊN": {
            "ĐÀO XUÂN CẦU\nNGUYỄN THỊ PHI": {
              "ĐÀO XUÂN CHÁT\nTRẦN THỊ THĂNG": {
                "ĐÀO XUÂN SƠN\nNGUYỄN THỊ VY": false,
                "ĐÀO THỊ UYÊN": false,
                "ĐÀO THỊ NGÂN": false,
              },
              "ĐÀO XUÂN TÙNG\nTHÁI THỊ HUỆ": {
                "ĐÀO XUÂN QUÂN": false,
                "ĐÀO THỊ NHI": false,
                "ĐÀO XUÂN TÀI": false,
              },
              "ĐÀO XUÂN HÙNG\nTHÁI THỊ VẸN": {
                "ĐÀO XUÂN ĐĂNG": false,
                "ĐÀO THỊ MY": false,
              },
            },
            "ĐÀO THỊ THƯƠNG": false,
            "ĐÀO XUÂN PHƯƠNG\nNGUYỄN THỊ THANH": {
              "ĐÀO THỊ THUÝ": false,
              "ĐÀO THỊ HIỀN": false,
              "ĐÀO XUÂN TUẤN\nNHÔ THỊ HƯỜNG": false,
              "ĐÀO XUÂN TÚ": false,
            },
            "ĐÀO THỊ PHƯỢNG": {
              INFO: "Bị hóc xương rồi mất năm 12 tuổi",
            },
            "ĐÀO THỊ HOA": false,
          },
          "ĐÀO XUÂN XANH\nTRẦN THỊ ĐÔNG": {
            "ĐÀO XUÂN THANH\nNGUYỄN THỊ LIỄU": {
              "ĐÀO THỊ TRINH": false,
              "ĐÀO THỊ UYÊN": false,
            },
            "ĐÀO XUÂN\nHOÀNG THỊ THANH": {
              "ĐÀO THỊ YẾN": false,
              "ĐÀO THỊ THUỲ": false,
              "ĐÀO THỊ DUNG": false,
              "ĐÀO XUÂN TUẤN": false,
            },
            "ĐÀO THỊ HẢI": false,
            "ĐÀO XUÂN HUỆ\nTRẦN THỊ TUYẾT": {
              "ĐÀO XUÂN LÝ\nHOÀNG THỊ THUÝ": {
                "ĐÀO THỊ LINH": false,
              },
              "ĐÀO THỊ NHUNG": false,
              "ĐÀO XUÂN HÙNG": false,
            },
            "ĐÀO XUÂN THANH\nĐẬU THỊ DIỆP": {
              "ĐÀO THỊ TRÂM": false,
              "ĐÀO XUÂN TÀI": false,
            },
          },
        },
      },
      "ĐÀO XUÂN CHẤT\nHOÀNG THỊ CHIÊN": {
        "ĐÀO XUÂN ĐÀI\nPHẠM THỊ QUẾ\nNGUYỄN THỊ TÝ": {
          "ĐÀO XUÂN NHƯƠNG\nTRẦN THỊ KÊ\nPHƯƠNG THỊ LIỄU": {
            "ĐÀO THỊ NGUYÊN": false,
            "ĐÀO XUÂN TƯ\nHOÀNG THỊ BI": {
              "ĐÀO XUÂN HÙNG": {
                "ĐÀO THỊ HÀ": false,
                "ĐÀO XUÂN TÂN\nLÊ THỊ DƯƠNG": false,
              },
              "ĐÀO XUÂN CƯỜNG\nTRƯƠNG THỊ ANH": {
                "ĐÀO THỊ TRANG": false,
                "ĐÀO XUÂN HẢI\nPHẠM THỊ NHUNG": {
                  "ĐÀO THỊ THƯ": false,
                },
              },
              "ĐÀO XUÂN QUANG\nNGUYỄN THỊ HƯƠNG": {
                "ĐÀO THỊ XUÂN": false,
                "ĐÀO XUÂN TRUNG\nNGUYỄN THỊ THUỲ": {
                  "ĐÀO XUÂN NAM": false,
                  "ĐÀO XUÂN NHẬT": false,
                },
              },
              "ĐÀO THỊ THUỲ": false,
              "ĐÀO THỊ GIANG": false,
              "ĐÀO THỊ LOAN": false,
              "ĐÀO THỊ PHƯỢNG": false,
              "ĐÀO XUÂN HOÀNG\nLÊ THỊ HÀ": {
                "ĐÀO THỊ HÂN": false,
                "ĐÀO XUÂN HIẾU": false,
                "ĐÀO XUÂN HIỀN": false,
              },
            },
            "ĐÀO THỊ NGUYỆT": false,
            "ĐÀO XUÂN MINH\nPHẠM THỊ LAN": {
              "ĐÀO XUÂN SƠN\nCAO THỊ AN": {
                "ĐÀO XUÂN DŨNG": false,
                "ĐÀO THỊ LÂM": false,
              },
            },
            "ĐÀO XUÂN CÔNG\nLÂM THỊ THẮM\nLÊ THỊ HIỆP": {
              "ĐÀO THỊ HẢI": false,
              "ĐÀO THỊ HƯƠNG": false,
              "ĐÀO THỊ QUỲNH": false,
            },
            "ĐÀO XUÂN NHẢN\nNGUYỄN THỊ LIÊN": {
              "ĐÀO THỊ NGA": false,
              "ĐÀO XUÂN NGHĨA": false,
              "ĐÀO XUÂN ĐỨC\nCAO THỊ QUỲNH": {
                "ĐÀO THỊ PHƯƠNG": false,
                "ĐÀO THỊ OANH": false,
              },
            },
          },
          "ĐÀO XUÂN TƯỜNG\nĐẶNG THỊ KHUÊ\nNGUYỄN THỊ HỘI": {
            "ĐÀO XUÂN VỌNG": false,
            "ĐÀO XUÂN KHANG\nNGUYỄN THỊ DUYÊN\nNGUYỄN THỊ QUÝ": {
              "ĐÀO THỊ HẢI": false,
              "ĐÀO XUÂN SƠN\nTRẦN THỊ LỢI": {
                "ĐÀO XUÂN HÙNG\nNGUYỄN THỊ DUYÊN": {
                  "ĐÀO THỊ MAI": false,
                  "ĐÀO XUÂN NGỌC": false,
                },
                "ĐÀO XUÂN MẠNH\nLÊ THỊ THU": {
                  "ĐÀO XUÂN BẢO": false,
                  "ĐÀO THỊ ANH": false,
                },
                "ĐÀO THỊ HIỀN": false,
              },
              "ĐÀO XUÂN THUỲ\nVŨ THỊ LIÊN": {
                "ĐÀO THỊ HƯƠNG": false,
                "ĐÀO XUÂN TUẤN\nTRẦN THỊ YẾN": {
                  "ĐÀO THỊ NHI": false,
                  "ĐÀO THỊ THẢO ANH": false,
                  "ĐÀO THỊ HUYỀN ANH": false,
                },
                "ĐÀO THỊ HUYỀN": false,
              },
              "ĐÀO THỊ DUNG": false,
              "ĐÀO XUÂN CHUNG": false,
              "ĐÀO XUÂN TÂM\nNGÔ THỊ NGA": {
                "ĐÀO XUÂN TÌNH": false,
              },
            },
            "ĐÀO THỊ TÙNG": false,
            "ĐÀO THỊ THÍ": false,
          },
          "ĐÀO XUÂN CẨM\nTRẦN THỊ THÌN": {
            "ĐÀO THỊ BÌNH": false,
            "ĐÀO THỊ MÙI": false,
            "ĐÀO XUÂN MUỘN\nNGUYỄN THỊ VINH": {
              "ĐÀO THỊ HUỆ": false,
              "ĐÀO THỊ LIỄU": false,
              "ĐÀO THỊ NGA": false,
              "ĐÀO THỊ HIỀN": false,
              "ĐÀO XUÂN ĐỢI\nNGUYỄN THỊ TRANG": {
                "ĐÀO THỊ ANH": false,
                "ĐÀO THỊ LAM": false,
              },
              "ĐÀO XUÂN CHỜ\nPHAN THỊ HÀ": {
                "ĐÀO THỊ DƯƠNG": false,
              },
            },
            "ĐÀO THỊ BÍNH": false,
            "ĐÀO XUÂN LỢI\nHOÀNG THỊ NGUYỆT": {
              "ĐÀO XUÂN TUẤN\nBÙI THỊ VY": {
                "ĐÀO XUÂN ANH": false,
              },
              "ĐÀO XUÂN THẮNG": {
                "ĐÀO XUÂN THÀNH": false,
                "ĐÀO THỊ NHIÊN": false,
              },
              "ĐÀO THỊ QUỲNH": false,
            },
          },
          "ĐÀO XUÂN LÂN\nTRẦN THỊ LINH": {
            "ĐÀO THỊ MẠN": false,
            "ĐÀO XUÂN TRẠCH": false,
            "ĐÀO THỊ NGẠCH": false,
            "ĐÀO THỊ LAN": false,
            "ĐÀO XUÂN TUỆ\nNGÔ THỊ SÂM": {
              "ĐÀO THỊ PHƯƠNG": false,
              "ĐÀO XUÂN CHIẾN\nTRẦN THỊ HỒNG": {
                "ĐÀO XUÂN ANH": false,
                "ĐÀO THỊ UYÊN": false,
                "ĐÀO THỊ TRANG": false,
                "ĐÀO XUÂN SANG": false,
              },
              "ĐÀO XUÂN CÔNG\nLÊ THỊ THOA": {
                "ĐÀO THỊ VY": false,
                "ĐÀO THỊ NA": false,
                "ĐÀO XUÂN TÀI": false,
              },
            },
            "ĐÀO XUÂN NGHỆ\nNGUYỄN THỊ THANH": {
              "ĐÀO XUÂN THUỲ\nHOÀNG THỊ DƯƠNG": {
                "ĐÀO THỊ TRANG": false,
                "ĐÀO XUÂN QUÂN\nHỒ THỊ ANH": {
                  "ĐÀO XUÂN BẢO": false,
                  "ĐÀO XUÂN HIẾU": false,
                },
                "ĐÀO XUÂN HUY": false,
              },
              "ĐÀO XUÂN THẮNG\nPHAN THỊ VÂN": {
                "ĐÀO XUÂN TRỌNG": false,
                "ĐÀO THỊ TÂY": false,
                "ĐÀO THỊ THUÝ": false,
                "ĐÀO THỊ LOAN": false,
                "ĐÀO XUÂN THẮNG": false,
              },
              "ĐÀO XUÂN THỂ\nVŨ THỊ HIÊN": {
                "ĐÀO THỊ NHƯ": false,
                "ĐÀO XUÂN SANG": false,
              },
              "ĐÀO XUÂN THAO": {
                "ĐÀO XUÂN KHIÊM": false,
                "ĐÀO THỊ NHIÊN": false,
              },
            },
            "ĐÀO THỊ HOÀ": false,
            "ĐÀO THỊ HỢP": false,
            "ĐÀO XUÂN THÀNH\nTRẦN THỊ MAI": {
              "ĐÀO XUÂN ANH\nBÙI THỊ HẰNG": {
                "ĐÀO XUÂN LY": false,
                "ĐÀO THỊ NHI": false,
                "ĐÀO XUÂN NAM": false,
              },
              "ĐÀO THỊ HƯƠNG": false,
              "ĐÀO THỊ HOA": false,
              "ĐÀO XUÂN TUẤN\nTRẦN THỊ THUỲ": {
                "ĐÀO THỊ HUYỀN": false,
                "ĐÀO THỊ MY": false,
              },
            },
          },
          "ĐÀO XUÂN LONG\nTRẦN THỊ MỸ": {
            "ĐÀO THỊ HOÀ": false,
            "ĐÀO XUÂN BÌNH\nPHẬM THỊ DÂN": {
              "ĐÀO XUÂN VINH\nNGÔ THỊ TÂM": {
                "ĐÀO THỊ TÌNH": false,
                "ĐÀO THỊ NGHĨA": false,
                "ĐÀO XUÂN QUÂN": false,
                "ĐÀO THỊ MY": false,
              },
              "ĐÀO THỊ HOA": false,
              "ĐÀO THỊ PHÚ": false,
              "ĐÀO THỊ HUỆ": false,
              "ĐÀO XUÂN PHÚC": false,
            },
            "ĐÀO XUÂN BE\nNGUYỄN THỊ HOA": {
              "ĐÀO XUÂN TUẤN": false,
              "ĐÀO XUÂN TIẾN\nNGUYỄN THỊ YẾN": {
                "ĐÀO XUÂN TÂN": false,
                "ĐÀO THỊ QUỲNH": false,
              },
              "ĐÀO XUÂN TÚ": {
                "ĐÀO THỊ QUỲNH": false,
              },
              "ĐÀO THỊ TÂM": false,
            },
            "ĐÀO THỊ THƯƠNG": false,
            "ĐÀO XUÂN LƯƠNG\nTRẦN THỊ THUÝ": {
              "ĐÀO XUÂN DƯƠNG\nTRẦN THỊ HẠNH": {
                "ĐÀO XUÂN VĂN": false,
                "ĐÀO XUÂN VÕ": false,
                "ĐÀO XUÂN ANH": false,
                "ĐÀO THỊ Ý": false,
              },
              "ĐÀO XUÂN TÀI\nNGUYỄN THỊ NGỌC": {
                "ĐÀO THỊ HUYỀN": false,
                "ĐÀO XUÂN QUÂN": false,
                "ĐÀO THỊ VY": false,
              },
              "ĐÀO XUÂN GIỎI\nNGUYỄN THỊ TRANG": {
                "ĐÀO THỊ LY": false,
                "ĐÀO XUÂN DUY": false,
              },
              "ĐÀO XUÂN TOÀN\nTRẦN THỊ THOA": {
                "ĐÀO THỊ THI": false,
              },
            },
            "ĐÀO XUÂN PHƯƠNG\nHỒ THỊ NGHINH": {
              "ĐÀO XUÂN NAM\nHỒ THỊ VÂN": {
                "ĐÀO THỊ MY": false,
              },
              "ĐÀO XUÂN BẮC": false,
            },
          },
          "ĐÀO XUÂN KIÊNG": false,
          "ĐÀO THỊ HỈ": false,
          "ĐÀO THỊ CHÂU": false,
          "ĐÀO THỊ NGHIÊNG": false,
          "ĐÀO THỊ TÌNH": false,
          "ĐÀO THỊ NỤ": false,
        },
        "ĐÀO XUÂN MONG": false,
        "ĐÀO XUÂN TƯ": false,
        "ĐÀO XUÂN XÊU": false,
        "ĐÀO XUÂN KỲ": false,
        "ĐÀO THỊ LÝ": false,
        "ĐÀO THỊ CHÍNH": false,
      },
      "ĐÀO THỊ NUÔI": false,
      "ĐÀO THỊ ĐÀO": false,
      "ĐÀO THỊ QUYẾT": false,
    },
  };

  function deepLoop(obj: any, children: any[], classNamePrefix: string) {
    let i = 0;
    for (const key in obj) {
      if (key === "INFO") continue;

      i++;
      const classNamePre = `${classNamePrefix}-${i}`;
      let currentNodeClassName = classNamePre;

      const gradeClassName = classNamePre.split("grade-")[1];
      const numberArr = gradeClassName?.split("-").map((each) => Number(each));

      // set vertical-text className
      if (numberArr.length > 3 && !classNamePre.includes("vertial-text")) {
        currentNodeClassName = `vertical-text ${currentNodeClassName}`;
      }

      // set grade2 color
      if (numberArr.length === 2) {
        currentNodeClassName = `layer2 ${currentNodeClassName}`;
      }

      // set same color of same children
      if (numberArr.length > 2) {
        const copiedNumberArr = [...numberArr];
        copiedNumberArr?.pop(); // remove last number
        const sum = copiedNumberArr.reduce((prev, cur) => prev + cur, 0);

        currentNodeClassName = `random-color-${sum % 5} ${currentNodeClassName}`;
      }

      const childrenKeys = Object.keys(obj[key]);
      const firstChildKey = childrenKeys?.[0];
      const element = {
        name: key,
        className: currentNodeClassName,
        direction: "l2r",
        collapsed: numberArr.length > 4, // collapse from layer 5
        info: firstChildKey === "INFO" ? obj[key][firstChildKey] : null,
        children: [],
      };
      children.push(element);

      if (typeof obj[key] === "object" && obj[key] !== null) {
        deepLoop(obj[key], element.children, classNamePre);
      }
    }

    return children;
  }

  const firstKey: string = Object.keys(data)[0];
  const className = `grade-1`;
  const orgData = {
    name: firstKey,
    direction: "l2r",
    id: className,
    className: className,
    children: [],
  };

  deepLoop(data[firstKey], orgData.children, className);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        Cách sử dụng:
        <div>
          <li>
            Mặc định chỉ hiện tới đời thứ 5, muốn xem thêm các đời sau thì ấn
            vào phía dưới mỗi ô để xem hoặc ẩn các con cháu của ô đó.
          </li>
          <li>
            Ấn vào chữ i ở mỗi ô (nếu có) để xem thông tin hay truyện kể về
            người ở ô đó. Lưu ý là nhiều truyện nghe kể lại nên có thể không
            đúng sự thật.
          </li>
        </div>
      </div>
      <OrganizationChart datasource={orgData} pan={true} zoom={true} />;
    </div>
  );
}
