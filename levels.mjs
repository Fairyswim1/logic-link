export const levels=[
  {
    "id": "book-14",
    "grade": 1,
    "title": "맞꼭지각의 까닭",
    "unit": "기본 도형",
    "code": "9수03-01",
    "source": [
      "eef5d73ee47d69ff",
      2
    ],
    "problem": "두 직선이 교차합니다. 서로 이웃한 각을 α, β, 그다음 각을 γ라 할 때 α=γ임을 설명하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "α+β=180°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "β+γ=180°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "두 등식에서 α+β=β+γ이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "양변에서 β를 빼면 α=γ이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": "vertical",
    "goal": 4,
    "chapter": 1,
    "kind": "proof"
  },
  {
    "id": "book-15",
    "grade": 1,
    "title": "세 각이 펴지면",
    "unit": "삼각형의 각",
    "code": "9수03-05",
    "source": [
      "09a6f1ae31e3e498",
      2
    ],
    "problem": "삼각형 ABC의 세 내각의 합이 180°임을 설명하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "A를 지나며 BC에 평행한 직선을 긋는다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "엇각으로 ∠B와 같은 각이 A의 한쪽에 생긴다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "엇각으로 ∠C와 같은 각이 A의 다른 쪽에 생긴다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "세 각이 A에서 평각을 이루므로 ∠A+∠B+∠C=180°이다.",
        "requires": [
          "c1",
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": "triangle",
    "goal": 4,
    "chapter": 1,
    "kind": "proof"
  },
  {
    "id": "book-16",
    "grade": 1,
    "title": "바깥 각의 비밀",
    "unit": "삼각형의 외각",
    "code": "9수03-05",
    "source": [
      "09a6f1ae31e3e498",
      3
    ],
    "problem": "△ABC에서 BC를 C 너머 D까지 연장했습니다. ∠ACD=∠A+∠B임을 설명하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "∠A+∠B+∠ACB=180°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠ACB+∠ACD=180°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "두 식에서 ∠ACB를 제외한 나머지가 같다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "∠ACD=∠A+∠B이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": "exterior",
    "goal": 4,
    "chapter": 1,
    "kind": "proof"
  },
  {
    "id": "book-17",
    "grade": 1,
    "title": "다각형을 나누면",
    "unit": "다각형의 각",
    "code": "9수03-05",
    "source": [
      "3fbd3e57979b8563",
      2
    ],
    "problem": "볼록 n각형의 내각의 합을 구하는 까닭을 이으세요.",
    "cards": [
      {
        "id": "c0",
        "text": "한 꼭짓점에서 이웃하지 않은 꼭짓점으로 대각선을 긋는다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "서로 겹치지 않는 삼각형 n−2개로 나뉜다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "각 삼각형의 내각의 합은 180°이다.",
        "requires": [
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "내각의 합은 180°×(n−2)이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 4,
    "chapter": 1,
    "kind": "proof"
  },
  {
    "id": "book-58",
    "grade": 1,
    "title": "한 바퀴 도는 외각",
    "unit": "다각형의 각",
    "code": "9수03-05",
    "source": [
      "3fbd3e57979b8563",
      4
    ],
    "problem": "볼록 n각형의 각 꼭짓점에서 한 외각씩 택한 합을 설명하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "한 내각과 이웃한 외각의 합은 180°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "내각과 외각을 모두 합하면 180°×n이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "내각의 합 180°×(n−2)를 빼면 외각의 합은 360°이다.",
        "requires": [
          "c1"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 3,
    "chapter": 1,
    "kind": "proof"
  },
  {
    "id": "book-59",
    "grade": 1,
    "title": "엇각이 같은 까닭",
    "unit": "평행선의 성질",
    "code": "9수03-02",
    "source": [
      "bb6e40fb4db7bccc",
      3
    ],
    "problem": "평행한 두 직선을 한 직선이 가릅니다. α와 β는 맞꼭지각, α와 γ는 동위각입니다. 엇각인 β와 γ가 같음을 설명하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "맞꼭지각이므로 α=β이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "평행선의 동위각이므로 α=γ이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "같은 α와 같으므로 β=γ이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 3,
    "chapter": 1,
    "kind": "proof"
  },
  {
    "id": "book-23",
    "grade": 2,
    "title": "같은 두 변, 같은 두 각",
    "unit": "이등변삼각형",
    "code": "9수03-09",
    "source": [
      "31fd725c381cf632",
      4
    ],
    "problem": "AB=AC이고 D는 BC의 중점입니다. 두 밑각이 같음을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "AB=AC이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "BD=CD이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "AD는 두 삼각형의 공통변이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "세 변이 각각 같아 △ABD≡△ACD이다. (SSS)",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "대응각이므로 ∠ABD=∠ACD이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "iso",
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-26",
    "grade": 2,
    "title": "같은 밑각에서 출발",
    "unit": "이등변삼각형의 역",
    "code": "9수03-09",
    "source": [
      "31fd725c381cf632",
      6
    ],
    "problem": "∠B=∠C인 △ABC에서 ∠A의 이등분선 AD를 그었습니다. AB=AC를 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "∠BAD=∠CAD이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠B=∠C이므로 삼각형의 나머지 각 ∠ADB=∠ADC이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "AD는 공통변이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "한 변과 양 끝 각이 같아 △ABD≡△ACD이다. (ASA)",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "대응변 AB=AC이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "iso",
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-28",
    "grade": 2,
    "title": "수직이등분선의 약속",
    "unit": "외심",
    "code": "9수03-10",
    "source": [
      "b4af1c6d28cd46bf",
      2
    ],
    "problem": "M은 AB의 중점이고 PM⊥AB입니다. PA=PB임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "AM=BM이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠PMA=∠PMB=90°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "PM은 공통변이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "SAS로 △PMA≡△PMB이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "대응변 PA=PB이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "bisector",
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-29",
    "grade": 2,
    "title": "세 꼭짓점까지 같은 거리",
    "unit": "외심",
    "code": "9수03-10",
    "source": [
      "b4af1c6d28cd46bf",
      3
    ],
    "problem": "O는 AB와 BC의 수직이등분선의 교점입니다. O가 외접원의 중심임을 설명하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "O는 AB의 수직이등분선 위이므로 OA=OB이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "O는 BC의 수직이등분선 위이므로 OB=OC이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "OA=OB=OC이므로 O 중심, OA 반지름인 원은 A,B,C를 지난다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "따라서 O는 삼각형 ABC의 외심이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 4,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-30",
    "grade": 2,
    "title": "각의 양쪽까지 같은 거리",
    "unit": "내심",
    "code": "9수03-10",
    "source": [
      "ef72bf858ea588c1",
      2
    ],
    "problem": "P는 ∠A의 이등분선 위입니다. 두 변에 내린 수선의 발을 D,E라 할 때 PD=PE를 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "∠ADP=∠AEP=90°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "빗변 AP는 공통이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "∠DAP=∠PAE이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "직각삼각형의 빗변과 한 예각이 같아 △ADP≡△AEP이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "대응변 PD=PE이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-31",
    "grade": 2,
    "title": "세 변에 닿는 원",
    "unit": "내심",
    "code": "9수03-10",
    "source": [
      "ef72bf858ea588c1",
      3
    ],
    "problem": "I는 ∠A,∠B의 이등분선의 교점입니다. I에서 AB,BC,CA에 내린 수선의 발을 D,E,F라 합니다. I가 내심임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "∠A의 이등분선 성질로 ID=IF이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠B의 이등분선 성질로 ID=IE이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "ID=IE=IF이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "I를 중심으로 ID를 반지름으로 그린 원은 세 변에 접한다.",
        "requires": [
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "따라서 I는 내심이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-32",
    "grade": 2,
    "title": "평행한 두 쌍",
    "unit": "평행사변형",
    "code": "9수03-11",
    "source": [
      "ba5c88d12281f1e2",
      2
    ],
    "problem": "AB∥CD, BC∥AD인 사각형 ABCD에서 AB=CD를 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "엇각이므로 ∠BAC=∠DCA이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "엇각이므로 ∠BCA=∠DAC이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "AC는 공통변이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "ASA로 △ABC≡△CDA이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "대응변이므로 AB=CD이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "para",
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-33",
    "grade": 2,
    "title": "대각선의 가운데",
    "unit": "평행사변형",
    "code": "9수03-11",
    "source": [
      "ba5c88d12281f1e2",
      3
    ],
    "problem": "평행사변형 ABCD의 대각선 교점을 O라 합니다. OA=OC, OB=OD를 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "평행사변형의 마주 보는 변 AB=CD이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "평행선의 엇각으로 ∠BAO=∠DCO이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "평행선의 엇각으로 ∠ABO=∠CDO이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "ASA로 △ABO≡△CDO이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "대응변이므로 OA=OC, OB=OD이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "para",
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-34",
    "grade": 2,
    "title": "네 변만으로 평행을",
    "unit": "평행사변형 조건",
    "code": "9수03-11",
    "source": [
      "1340cabe9bfa2694",
      2
    ],
    "problem": "볼록 사각형 ABCD에서 AB=CD, BC=DA입니다. 평행사변형임을 설명하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "AB=CD, BC=DA이며 AC는 공통이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "SSS로 △ABC≡△CDA이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "대응각 ∠BAC=∠DCA, ∠BCA=∠DAC이다.",
        "requires": [
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "엇각이 같으므로 AB∥CD, BC∥AD이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "두 쌍의 대변이 평행하므로 평행사변형이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "para",
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-35",
    "grade": 2,
    "title": "직사각형의 긴 두 선",
    "unit": "직사각형",
    "code": "9수03-11",
    "source": [
      "944f5608720cac04",
      1
    ],
    "problem": "직사각형 ABCD에서 두 대각선 AC,BD의 길이가 같음을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "대변 AB=DC이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "BC는 공통변이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "∠ABC=∠DCB=90°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "SAS로 △ABC≡△DCB이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "대응변 AC=DB이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "rect",
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-36",
    "grade": 2,
    "title": "마름모의 교차",
    "unit": "마름모",
    "code": "9수03-11",
    "source": [
      "944f5608720cac04",
      3
    ],
    "problem": "마름모 ABCD의 대각선 교점 O에서 AC⊥BD임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "AB=AD이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "평행사변형의 대각선은 이등분되므로 BO=DO이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "AO는 공통변이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "SSS로 △ABO≡△ADO이므로 ∠AOB=∠AOD이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "두 각의 합이 180°이므로 각각 90°이다. 따라서 AC⊥BD이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "rhombus",
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-38",
    "grade": 2,
    "title": "중점을 잇는 다리",
    "unit": "평행선과 길이의 비",
    "code": "9수03-14",
    "source": [
      "3518d637baedbd4a",
      3
    ],
    "problem": "D,E는 △ABC의 AB,AC의 중점입니다. DE∥BC이고 DE=BC/2임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "AD/AB=AE/AC=1/2이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠DAE=∠BAC는 공통각이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "두 변의 비와 끼인각으로 △ADE∽△ABC이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "대응각이 같으므로 DE∥BC이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "닮음비가 1:2이므로 DE=BC/2이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-39",
    "grade": 2,
    "title": "네 삼각형의 빈자리",
    "unit": "피타고라스 정리",
    "code": "9수03-15",
    "source": [
      "95a186df9f401055",
      2
    ],
    "problem": "직각변 a,b, 빗변 c인 합동 삼각형 4개를 한 변 a+b인 정사각형 안에 둘러 놓습니다. 중앙은 한 변 c인 정사각형입니다. 넓이를 비교하여 a²+b²=c²임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "큰 정사각형의 넓이는 (a+b)²이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "삼각형 네 개의 넓이 합은 4×ab/2=2ab이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "중앙 정사각형의 넓이는 c²이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "넓이를 합치면 (a+b)²=2ab+c²이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "a²+2ab+b²=2ab+c²를 정리하면 a²+b²=c²이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "pyth",
    "goal": 5,
    "chapter": 2,
    "kind": "proof"
  },
  {
    "id": "book-47",
    "grade": 3,
    "title": "현을 반으로",
    "unit": "원의 현",
    "code": "9수03-18",
    "source": [
      "734847aabe5f795a",
      5
    ],
    "problem": "O는 원의 중심, OM⊥AB이며 M은 현 AB 위입니다. AM=BM임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "반지름이므로 OA=OB이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "OM은 공통변이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "∠OMA=∠OMB=90°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "빗변과 한 변이 같아 직각삼각형 OMA, OMB는 합동이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "대응변이므로 AM=BM이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "chord",
    "goal": 5,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-49",
    "grade": 3,
    "title": "중심에서 같은 거리",
    "unit": "원의 현",
    "code": "9수03-18",
    "source": [
      "734847aabe5f795a",
      6
    ],
    "problem": "한 원에서 OM⊥AB, ON⊥CD, OM=ON입니다. 현 AB=CD임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "반지름 OA=OC이고 OM=ON이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "직각삼각형 OMA, ONC는 빗변과 한 변이 같아 합동이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "대응변 AM=CN이다.",
        "requires": [
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "중심에서 현에 내린 수선은 현을 이등분하므로 AB=2AM, CD=2CN이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c4",
        "text": "따라서 AB=CD이다.",
        "requires": [
          "c2",
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 5,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-50",
    "grade": 3,
    "title": "바깥 한 점의 두 접선",
    "unit": "원의 접선",
    "code": "9수03-18",
    "source": [
      "734847aabe5f795a",
      9
    ],
    "problem": "원 O 밖의 점 P에서 그은 접선의 접점은 A,B입니다. PA=PB임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "접점의 반지름은 접선에 수직이므로 ∠PAO=∠PBO=90°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "빗변 PO는 공통이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "반지름 OA=OB이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "빗변과 한 변이 같아 △PAO≡△PBO이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "대응변이므로 PA=PB이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "tangent",
    "goal": 5,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-51",
    "grade": 3,
    "title": "지름을 지나가는 각",
    "unit": "원주각",
    "code": "9수03-19",
    "source": [
      "4acef62141031630",
      3
    ],
    "problem": "PB가 지름이고 O는 그 위의 중심입니다. A는 원 위의 다른 점입니다. ∠AOB=2∠APB를 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "반지름 OP=OA이므로 ∠OPA=∠OAP이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠AOB는 △OAP의 외각이므로 ∠AOB=∠OPA+∠OAP이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "따라서 ∠AOB=2∠OPA이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "P,O,B가 한 직선 위이므로 ∠OPA=∠APB이다. 따라서 ∠AOB=2∠APB이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": "inscribed",
    "goal": 4,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-52",
    "grade": 3,
    "title": "원주각을 두 조각으로",
    "unit": "원주각",
    "code": "9수03-19",
    "source": [
      "4acef62141031630",
      3
    ],
    "problem": "O가 ∠APB 안쪽에 있습니다. 지름 PQ를 긋고, P를 포함하지 않는 호 AB 위에 Q가 있습니다.",
    "cards": [
      {
        "id": "c0",
        "text": "지름을 이용한 경우에서 ∠APQ=∠AOQ/2이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "같은 방법으로 ∠QPB=∠QOB/2이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "∠APB=∠APQ+∠QPB이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "더하면 ∠APB=(∠AOQ+∠QOB)/2이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "호 AB의 중심각은 두 중심각의 합이므로 ∠APB는 그 절반이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 5,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-53",
    "grade": 3,
    "title": "원주각의 차",
    "unit": "원주각",
    "code": "9수03-19",
    "source": [
      "4acef62141031630",
      4
    ],
    "problem": "O가 ∠APB 바깥에 있습니다. 지름 PR을 그었고, 반직선 PA는 ∠RPB 안에 있습니다.",
    "cards": [
      {
        "id": "c0",
        "text": "∠RPB는 대응하는 중심각의 절반이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠RPA도 대응하는 중심각의 절반이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "∠APB=∠RPB−∠RPA이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "따라서 ∠APB는 두 중심각의 차의 절반이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "그 차가 호 AB의 중심각이므로 원주각은 중심각의 절반이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 5,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-54",
    "grade": 3,
    "title": "같은 호가 건네는 각",
    "unit": "원주각",
    "code": "9수03-19",
    "source": [
      "4acef62141031630",
      4
    ],
    "problem": "P,Q가 원의 같은 쪽 호 위에 있고 ∠APB와 ∠AQB가 동일한 호 AB를 봅니다. 두 각이 같음을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "∠APB는 해당 호 AB의 중심각의 절반이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠AQB도 같은 중심각의 절반이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "같은 각의 절반이므로 ∠APB=∠AQB이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 3,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-55",
    "grade": 3,
    "title": "지름 위의 직각",
    "unit": "원주각",
    "code": "9수03-19",
    "source": [
      "4acef62141031630",
      5
    ],
    "problem": "AB는 원의 지름이고 P는 A,B가 아닌 원 위의 점입니다. ∠APB=90°임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "지름 AB가 만드는 반원의 중심각은 180°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "그 호에 대한 원주각은 중심각의 절반이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "따라서 ∠APB=180°/2=90°이다.",
        "requires": [
          "c1"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 3,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-56",
    "grade": 3,
    "title": "원 안의 네 꼭짓점",
    "unit": "원에 내접하는 사각형",
    "code": "9수03-19",
    "source": [
      "4acef62141031630",
      5
    ],
    "problem": "A,B,C,D가 원 위에 차례로 놓입니다. ∠ABC+∠ADC=180°임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "∠ABC가 보는 호 ADC와 ∠ADC가 보는 호 ABC가 원 전체를 이룬다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "두 호의 중심각을 더하면 360°이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "각 원주각은 대응하는 중심각의 절반이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "따라서 ∠ABC+∠ADC=360°/2=180°이다.",
        "requires": [
          "c1",
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": "cyclic",
    "goal": 4,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-63",
    "grade": 3,
    "title": "같은 현의 거리",
    "unit": "원의 현",
    "code": "9수03-18",
    "source": [
      "734847aabe5f795a",
      6
    ],
    "problem": "같은 원에서 현 AB=CD입니다. 중심 O에서 두 현에 내린 수선의 발 M,N에 대해 OM=ON을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "중심에서 현에 내린 수선은 현을 이등분하므로 AM=AB/2, CN=CD/2이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "AB=CD이므로 AM=CN이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "빗변 OA=OC는 반지름이고 한 변 AM=CN이므로 직각삼각형 OMA, ONC는 합동이다.",
        "requires": [
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "대응변이므로 OM=ON이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 4,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-64",
    "grade": 3,
    "title": "접선과 현이 만드는 각",
    "unit": "접선과 원주각",
    "code": "9수03-19",
    "source": [
      "4acef62141031630",
      10
    ],
    "problem": "원 위 A의 접선 AT와 현 AB가 이루는 ∠BAT는 예각입니다. 지름 AD를 긋고 B는 반원 AD 위, C는 반대쪽 반원 위에 있습니다. ∠BAT=∠BCA를 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "접선과 지름이 수직이므로 ∠BAT=90°−∠BAD이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "지름 AD의 원주각이 직각이므로 ∠BCA=90°−∠BCD이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "같은 호 BD를 보는 원주각 ∠BAD=∠BCD이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "같은 각을 90°에서 뺐으므로 ∠BAT=∠BCA이다.",
        "requires": [
          "c0",
          "c1",
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 4,
    "chapter": 3,
    "kind": "proof"
  },
  {
    "id": "book-11",
    "grade": 1,
    "title": "같은 각을 옮기기",
    "unit": "기본 작도",
    "code": "9수03-03",
    "source": [
      "2f0e49c6662601f4",
      2
    ],
    "problem": "∠XOY를 새 반직선 O′X′에 옮깁니다. 컴퍼스와 눈금 없는 자를 사용하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "O를 중심으로 호를 그려 두 변과 만나는 점을 P, Q라 한다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "같은 반지름으로 O′ 중심의 호를 그려 O′X′와의 교점을 P′라 한다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "컴퍼스로 PQ 길이를 재고 P′에서 새 호 위의 Q′를 정한다.",
        "requires": [
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "반직선 O′Q′를 그리면 같은 크기의 각이 완성된다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 4,
    "chapter": 1,
    "kind": "construction"
  },
  {
    "id": "book-12",
    "grade": 1,
    "title": "세 변으로 삼각형",
    "unit": "삼각형 작도",
    "code": "9수03-03",
    "source": [
      "fd39356f8ecfda85",
      2
    ],
    "problem": "변의 길이가 4, 5, 6인 삼각형을 작도하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "길이가 6인 선분 BC를 그린다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "B 중심 반지름 4인 원을 그린다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "C 중심 반지름 5인 원을 그린다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "두 원의 한 교점을 A라 한다.",
        "requires": [
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "A와 B, A와 C를 이으면 삼각형이 완성된다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": "sss",
    "goal": 5,
    "chapter": 1,
    "kind": "construction"
  },
  {
    "id": "book-13",
    "grade": 1,
    "title": "두 변 사이의 각",
    "unit": "삼각형 작도",
    "code": "9수03-03",
    "source": [
      "fd39356f8ecfda85",
      3
    ],
    "problem": "AB=5, AC=4, ∠BAC=60°인 삼각형을 작도하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "길이 5인 선분 AB를 그린다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "A에서 AB와 60°를 이루는 반직선을 작도한다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "그 반직선 위에 AC=4인 C를 정한다.",
        "requires": [
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "B와 C를 연결한다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 4,
    "chapter": 1,
    "kind": "construction"
  },
  {
    "id": "book-57",
    "grade": 1,
    "title": "한 변과 양 끝의 각",
    "unit": "삼각형 작도",
    "code": "9수03-03",
    "source": [
      "fd39356f8ecfda85",
      4
    ],
    "problem": "선분 BC와 B,C에 놓을 두 각이 주어졌습니다. 두 각의 합은 180°보다 작습니다. 같은 쪽에 삼각형을 작도하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "주어진 길이의 선분 BC를 그린다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "BC의 한쪽에서 B에 주어진 각을 옮겨 반직선을 그린다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "BC의 같은 쪽에서 C에 주어진 각을 옮겨 반직선을 그린다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "두 반직선의 교점을 A라 한다.",
        "requires": [
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "△ABC가 구하는 삼각형이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ],
    "figure": null,
    "goal": 5,
    "chapter": 1,
    "kind": "construction"
  }
];
export const chapters=[{"grade":1,"name":"새싹 서가","reward":"길잡이 책갈피"},{"grade":2,"name":"별빛 서가","reward":"증명의 책갈피"},{"grade":3,"name":"달빛 서가","reward":"지혜의 책갈피"}];
export const practice={
  "id": "practice-proof",
  "grade": 1,
  "title": "맞꼭지각은 왜 같을까?",
  "unit": "증명 연습",
  "kind": "proof",
  "code": null,
  "problem": "두 직선이 만나 생긴 맞꼭지각 α, γ 사이에 β가 있어요. α=γ인 이유를 이어 보세요.",
  "goal": 3,
  "cards": [
    {
      "id": "p0",
      "text": "α와 β는 이웃한 각이므로 α+β=180°이다.",
      "requires": [],
      "valid": true
    },
    {
      "id": "p1",
      "text": "β와 γ도 이웃한 각이므로 β+γ=180°이다.",
      "requires": [],
      "valid": true
    },
    {
      "id": "p2",
      "text": "두 식에서 같은 β를 빼면 α=γ이다.",
      "requires": [
        "p0",
        "p1"
      ],
      "valid": true
    }
  ],
  "figure": "vertical"
};
