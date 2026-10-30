export const tasks=[
  {
    "id": "proof-note-1",
    "version": "2",
    "kind": "proof",
    "code": "9수03-09",
    "title": "가운데로 그은 선",
    "problem": "PQ=PR인 △PQR에서 M은 QR의 중점입니다. ∠Q=∠R임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "PQ=PR이고 QM=RM이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "PM은 공통변이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "SSS로 △PQM≡△PRM이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "대응각이므로 ∠PQM=∠PRM이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-2",
    "version": "2",
    "kind": "proof",
    "code": "9수03-09",
    "title": "반으로 나눈 꼭지각",
    "problem": "XY=XZ인 △XYZ에서 XW는 꼭지각의 이등분선이고 W는 YZ 위입니다. XW⊥YZ임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "XY=XZ, ∠YXW=∠ZXW이고 XW는 공통변이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "SAS로 △XYW≡△XZW이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "대응각 ∠XWY=∠XWZ이다.",
        "requires": [
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "두 각은 평각을 나누므로 합이 180°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c4",
        "text": "따라서 두 각은 각각 90°이므로 XW⊥YZ이다.",
        "requires": [
          "c2",
          "c3"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-3",
    "version": "2",
    "kind": "proof",
    "code": "9수03-10",
    "title": "세 번째 수직이등분선",
    "problem": "O는 △ABC의 AB, AC의 수직이등분선의 교점입니다. O가 BC의 수직이등분선에도 놓임을 설명하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "OA=OB이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "OA=OC이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "따라서 OB=OC이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "두 점 B,C에서 같은 거리에 있는 O는 BC의 수직이등분선 위에 있다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-4",
    "version": "2",
    "kind": "proof",
    "code": "9수03-10",
    "title": "같은 거리의 중심",
    "problem": "J는 △KLM의 두 내각 K,L의 이등분선 교점입니다. J에서 KL,LM,MK에 내린 수선의 발이 U,V,W일 때 J가 내심임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "K의 각을 이등분하므로 JU=JW이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "L의 각을 이등분하므로 JU=JV이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "따라서 JU=JV=JW이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "J 중심, JU 반지름인 원은 세 변에 접하므로 J가 내심이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-5",
    "version": "2",
    "kind": "proof",
    "code": "9수03-11",
    "title": "같은 대각선을 가진 평행사변형",
    "problem": "평행사변형 ABCD에서 AC=BD입니다. 직사각형임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "AB=DC이고 BC는 공통이며 AC=DB이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "SSS로 △ABC≡△DCB이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "따라서 ∠ABC=∠DCB이다.",
        "requires": [
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "평행사변형의 이웃한 두 각의 합은 180°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c4",
        "text": "같은 두 각은 90°이므로 이 평행사변형은 직사각형이다.",
        "requires": [
          "c2",
          "c3"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-6",
    "version": "2",
    "kind": "proof",
    "code": "9수03-11",
    "title": "수직으로 만나는 대각선",
    "problem": "평행사변형 ABCD에서 AC⊥BD, 교점 O입니다. 마름모임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "BO=DO이고 AO는 공통이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠AOB=∠AOD=90°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "SAS로 △AOB≡△AOD이므로 AB=AD이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "평행사변형의 대변은 같으므로 네 변이 모두 같다.",
        "requires": [
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "따라서 ABCD는 마름모이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-7",
    "version": "2",
    "kind": "proof",
    "code": "9수03-15",
    "title": "넓이로 연결하는 세 변",
    "problem": "직각변 p,q와 빗변 r인 합동 삼각형 4개를 한 변 p+q인 정사각형 안에 둘러 놓았습니다. 가운데는 한 변 r인 정사각형입니다. p²+q²=r²을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "바깥 정사각형의 넓이는 (p+q)²이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "삼각형 넷의 넓이 합은 2pq이고 가운데 넓이는 r²이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "전체 넓이에서 (p+q)²=2pq+r²이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "전개한 뒤 2pq를 빼면 p²+q²=r²이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-8",
    "version": "2",
    "kind": "proof",
    "code": "9수03-15",
    "title": "높이로 나눈 두 삼각형",
    "problem": "∠C=90°인 △ABC에서 C로부터 빗변 AB에 내린 수선의 발을 H라 합니다. 닮음을 이용해 AC²+BC²=AB²을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "공통인 예각과 직각으로 △ACH∽△ABC, △CBH∽△ABC이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "대응변의 비에서 AC²=AB×AH이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "대응변의 비에서 BC²=AB×BH이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "두 식을 더하면 AC²+BC²=AB×(AH+BH)이다.",
        "requires": [
          "c1",
          "c2"
        ],
        "valid": true
      },
      {
        "id": "c4",
        "text": "AH+BH=AB이므로 AC²+BC²=AB²이다.",
        "requires": [
          "c3"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-9",
    "version": "2",
    "kind": "proof",
    "code": "9수03-18",
    "title": "같은 길이의 두 접선",
    "problem": "점 T에서 원 O에 그은 두 접선의 접점은 U,V입니다. TU=TV임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "반지름 OU=OV이고 OT는 공통이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "반지름과 접선은 수직이므로 ∠OUT=∠OVT=90°이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "빗변과 한 변이 같아 △OUT≡△OVT이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "대응변이므로 TU=TV이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-10",
    "version": "2",
    "kind": "proof",
    "code": "9수03-18",
    "title": "원을 감싼 네 변",
    "problem": "볼록 사각형 ABCD의 네 변이 한 원에 접합니다. AB+CD=BC+DA임을 설명하세요.",
    "cards": [
      {
        "id": "c0",
        "text": "각 꼭짓점에서 원에 그은 두 접선의 길이는 각각 같다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "A,B,C,D에서 생긴 같은 길이 쌍을 각각 a,b,c,d라 두면 AB=a+b, BC=b+c, CD=c+d, DA=d+a이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "AB+CD=a+b+c+d, BC+DA=b+c+d+a이다.",
        "requires": [
          "c1"
        ],
        "valid": true
      },
      {
        "id": "c3",
        "text": "더하는 순서를 바꾸면 같으므로 AB+CD=BC+DA이다.",
        "requires": [
          "c2"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-11",
    "version": "2",
    "kind": "proof",
    "code": "9수03-19",
    "title": "한 호를 보는 두 자리",
    "problem": "원 위의 U,V에서 ∠RUS와 ∠RVS가 같은 호 RS를 봅니다. 두 원주각이 같음을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "∠RUS는 호 RS에 대한 중심각의 절반이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "∠RVS도 같은 호 RS에 대한 중심각의 절반이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c2",
        "text": "같은 각의 절반이므로 ∠RUS=∠RVS이다.",
        "requires": [
          "c0",
          "c1"
        ],
        "valid": true
      }
    ]
  },
  {
    "id": "proof-note-12",
    "version": "2",
    "kind": "proof",
    "code": "9수03-19",
    "title": "마주 보는 각의 합",
    "problem": "K,L,M,N이 원 위에 차례로 놓입니다. ∠KLM+∠KNM=180°임을 보이세요.",
    "cards": [
      {
        "id": "c0",
        "text": "두 각이 보는 호 KM은 서로 합쳐 원 전체를 이룬다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c1",
        "text": "따라서 그 두 호에 대한 중심각의 합은 360°이다.",
        "requires": [
          "c0"
        ],
        "valid": true
      },
      {
        "id": "c2",
        "text": "각 원주각은 해당 중심각의 절반이다.",
        "requires": [],
        "valid": true
      },
      {
        "id": "c3",
        "text": "그러므로 두 원주각의 합은 360°의 절반인 180°이다.",
        "requires": [
          "c1",
          "c2"
        ],
        "valid": true
      }
    ]
  }
];
export const labels={"9수03-09":"이등변삼각형","9수03-10":"외심과 내심","9수03-11":"사각형","9수03-15":"피타고라스 정리","9수03-18":"현과 접선","9수03-19":"원주각"};
