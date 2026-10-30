import {mathHtml} from './math-text.mjs';
// Presentation only: original problems and proof dependencies remain unchanged.
export const layouts={
  "book-14": [
    "두 직선이 교차합니다. 서로 이웃한 각을 α, β, 그다음 각을 γ라 합니다.",
    [
      "α=γ"
    ]
  ],
  "book-16": [
    "△ABC에서 BC를 C 너머 D까지 연장했습니다.",
    [
      "∠ACD=∠A+∠B"
    ]
  ],
  "book-26": [
    "∠B=∠C인 △ABC에서 ∠A의 이등분선 AD를 그었습니다.",
    [
      "AB=AC"
    ]
  ],
  "book-28": [
    "M은 AB의 중점이고 PM⊥AB입니다.",
    [
      "PA=PB"
    ]
  ],
  "book-30": [
    "P는 ∠A의 이등분선 위입니다. 두 변에 내린 수선의 발은 D,E입니다.",
    [
      "PD=PE"
    ]
  ],
  "book-32": [
    "AB∥CD, BC∥AD인 사각형 ABCD입니다.",
    [
      "AB=CD"
    ]
  ],
  "book-33": [
    "평행사변형 ABCD의 대각선 교점을 O라 합니다.",
    [
      "OA=OC",
      "OB=OD"
    ]
  ],
  "book-36": [
    "마름모 ABCD의 대각선 교점은 O입니다.",
    [
      "AC⊥BD"
    ]
  ],
  "book-38": [
    "D,E는 △ABC의 AB,AC의 중점입니다.",
    [
      "DE∥BC",
      "DE=BC/2"
    ]
  ],
  "book-39": [
    "직각변 a,b, 빗변 c인 합동 삼각형 4개를 한 변 a+b인 정사각형 안에 둘러 놓습니다. 중앙은 한 변 c인 정사각형입니다. 넓이를 비교해 보세요.",
    [
      "a²+b²=c²"
    ]
  ],
  "book-47": [
    "O는 원의 중심, OM⊥AB이며 M은 현 AB 위입니다.",
    [
      "AM=BM"
    ]
  ],
  "book-49": [
    "한 원에서 OM⊥AB, ON⊥CD, OM=ON입니다. 두 현 AB와 CD의 길이를 비교합니다.",
    [
      "AB=CD"
    ]
  ],
  "book-50": [
    "원 O 밖의 점 P에서 그은 접선의 접점은 A,B입니다.",
    [
      "PA=PB"
    ]
  ],
  "book-51": [
    "PB가 지름이고 O는 그 위의 중심입니다. A는 원 위의 다른 점입니다.",
    [
      "∠AOB=2∠APB"
    ]
  ],
  "book-55": [
    "AB는 원의 지름이고 P는 A,B가 아닌 원 위의 점입니다.",
    [
      "∠APB=90°"
    ]
  ],
  "book-56": [
    "A,B,C,D가 원 위에 차례로 놓입니다.",
    [
      "∠ABC+∠ADC=180°"
    ]
  ],
  "book-63": [
    "같은 원에서 현 AB=CD입니다. 중심 O에서 두 현에 내린 수선의 발을 M,N이라 합니다.",
    [
      "OM=ON"
    ]
  ],
  "book-64": [
    "원 위 A의 접선 AT와 현 AB가 이루는 ∠BAT는 예각입니다. 지름 AD를 긋고 B는 반원 AD 위, C는 반대쪽 반원 위에 있습니다.",
    [
      "∠BAT=∠BCA"
    ]
  ],
  "proof-note-1": [
    "PQ=PR인 △PQR에서 M은 QR의 중점입니다.",
    [
      "∠Q=∠R"
    ]
  ],
  "proof-note-2": [
    "XY=XZ인 △XYZ에서 XW는 꼭지각의 이등분선이고 W는 YZ 위입니다.",
    [
      "XW⊥YZ"
    ]
  ],
  "proof-note-7": [
    "직각변 p,q와 빗변 r인 합동 삼각형 4개를 한 변 p+q인 정사각형 안에 둘러 놓았습니다. 가운데는 한 변 r인 정사각형입니다.",
    [
      "p²+q²=r²"
    ]
  ],
  "proof-note-8": [
    "∠C=90°인 △ABC에서 C로부터 빗변 AB에 내린 수선의 발을 H라 합니다. 닮음을 이용해 보세요.",
    [
      "AC²+BC²=AB²"
    ]
  ],
  "proof-note-9": [
    "점 T에서 원 O에 그은 두 접선의 접점은 U,V입니다.",
    [
      "TU=TV"
    ]
  ],
  "proof-note-10": [
    "볼록 사각형 ABCD의 네 변이 한 원에 접합니다.",
    [
      "AB+CD=BC+DA"
    ]
  ],
  "proof-note-12": [
    "K,L,M,N이 원 위에 차례로 놓입니다.",
    [
      "∠KLM+∠KNM=180°"
    ]
  ]
};
export function problemHtml(task){
 const layout=layouts[task.id];
 const context=layout?layout[0]:task.problem;
 const paragraphs=context.split(/(?<=\.)\s+/).map(s=>'<p class="problem-condition">'+mathHtml(s)+'</p>').join('');
 return paragraphs+(layout?'<div class="proof-goal"><span class="proof-goal-label">증명할 관계</span>'+layout[1].map(eq=>'<div class="proof-goal-equation">'+mathHtml(eq)+'</div>').join('')+'</div>':'');
}
