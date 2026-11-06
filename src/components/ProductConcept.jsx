import { productConcepts } from '../data/productConcepts';
import './ProductConcept.css';

// A small architectural drawing vocabulary. Every scene is composed for its
// product; connecting strokes illustrate the brief, not deployment contracts.
const Line = ({ d, faint = false, dash = false, ...props }) => <path d={d} fill="none" className={faint ? 'concept-muted' : undefined} strokeDasharray={dash ? '5 7' : undefined} {...props} />;
const Dot = ({ x, y, r = 5, ...props }) => <circle cx={x} cy={y} r={r} className="concept-node" {...props} />;
const Label = ({ x, y, children, small = false, ...props }) => <text x={x} y={y} className={small ? 'concept-label concept-label-small' : 'concept-label'} {...props}>{children}</text>;
const Cube = ({ x, y, w = 76, h = 48, d = 30, accent = false }) => <g className={accent ? 'concept-accent' : undefined}>
  <path d={`M${x},${y - h} l${d},${-d / 2} h${w} l${-d},${d / 2} Z`} className="concept-top" />
  <path d={`M${x},${y - h} h${w} v${h} h${-w} Z`} className="concept-front" />
  <path d={`M${x + w},${y - h} l${d},${-d / 2} v${h} l${-d},${d / 2} Z`} className="concept-side" />
</g>;
const Sheet = ({ x, y, w = 90, h = 110, lines = 3, accent = false }) => <g className={accent ? 'concept-accent' : undefined}>
  <path d={`M${x},${y} h${w - 18} l18,18 v${h - 18} h${-w} Z M${x + w - 18},${y} v18 h18`} className="concept-front" />
  {Array.from({ length: lines }, (_, i) => <Line key={i} d={`M${x + 15},${y + 37 + i * 16} h${w - 30 - (i === lines - 1 ? 15 : 0)}`} faint />)}
</g>;
const Panel = ({ x, y, w = 180, h = 130, children }) => <g>
  <rect x={x} y={y} width={w} height={h} rx="6" className="concept-front" />
  <Line d={`M${x},${y + 24} h${w}`} faint />
  {[12, 23, 34].map((dx) => <Dot key={dx} x={x + dx} y={y + 12} r={2} />)}
  {children}
</g>;
const Speech = ({ x, y, w = 105, h = 62, flip = false }) => <g>
  <path d={`M${x},${y} h${w} v${h} h${flip ? -18 : -(w - 36)} l${flip ? -18 : -18},18 v-18 H${x} Z`} className="concept-front" />
  <Line d={`M${x + 18},${y + 22} h${w - 36} M${x + 18},${y + 38} h${w - 52}`} faint />
</g>;
const Graph = ({ x = 300, y = 170, size = 65 }) => <g>
  <Line d={`M${x - size},${y + size / 2} L${x},${y - size} L${x + size},${y + size / 2} Z`} />
  <Line d={`M${x - size},${y + size / 2} L${x},${y} L${x + size},${y + size / 2} M${x},${y} V${y - size}`} faint />
  <Dot x={x} y={y - size} r={9} /><Dot x={x - size} y={y + size / 2} r={9} /><Dot x={x + size} y={y + size / 2} r={9} /><Dot x={x} y={y} r={5} />
</g>;
const Floor = () => <g className="concept-muted">
  <Line d="M65 265 L385 105 L545 185 L225 345 Z" />
  <Line d="M105 285 L425 125 M145 305 L465 145 M185 325 L505 165 M145 225 L305 305 M225 185 L385 265 M305 145 L465 225" faint />
</g>;

function Scene({ slug }) {
  switch (slug) {
    case 'kido':
      return <><Floor />{[[145, 185, 65, 'Σ'], [270, 125, 44, 'ι'], [395, 185, 76, 'μ'], [145, 280, 42, 'Φ'], [270, 220, 63, 'ο'], [395, 280, 48, 'κ']].map(([x, y, h, letter]) => <g key={letter}><Cube x={x} y={y} w={58} h={h} d={28} accent={letter === 'μ'} /><Label x={x + 29} y={y - h / 2 + 7} textAnchor="middle">{letter}</Label></g>)}</>;
    case 'kido-sigma':
      return <><Floor /><Line d="M126 246 V107 H434 V246 M126 108 L157 92 H465 V230 L434 246" /><Cube x={156} y={255} w={140} h={99} d={32} accent /><Label x={226} y={217} textAnchor="middle">Commerce</Label><Cube x={330} y={230} w={70} h={35} d={27} /><Line d="M347 178 V144 H414 V178 M176 140 V124 H296 V140" faint dash /></>;
    case 'kido-iota':
      return <><Line d="M120 114 H480 M180 114 V155 M300 114 V155 M420 114 V155" dash /><Panel x={153} y={49} w={115} h={65} /><Panel x={332} y={49} w={115} h={65} />{[[110, 220], [250, 220], [390, 220], [110, 298], [250, 298], [390, 298]].map(([x, y], i) => <g key={x + y}><Cube x={x} y={y} w={75} h={44} d={26} accent={i === 1} /><Line d={`M${x + 18} ${y - 22} h39`} faint /></g>)}<Line d="M95 320 H510" faint /></>;
    case 'kido-mu':
      return <><Line d="M170 115 C260 37 421 61 461 164 M469 212 C414 307 240 330 150 243 M130 205 C113 165 128 132 170 115" dash /><Line d="M447 158 l14 6 4-16 M163 251 l-13-8-6 16" /><Sheet x={100} y={123} w={92} h={112} /><Graph x={146} y={177} size={22} /><Panel x={249} y={72} w={122} h={103}><Line d="M267 140 l24-28 27 28 33-38" /></Panel><Cube x={381} y={260} w={100} h={68} d={30} accent /><Label x={145} y={266} textAnchor="middle">Weave</Label><Label x={310} y={207} textAnchor="middle">Loom</Label><Label x={431} y={295} textAnchor="middle">Fabric</Label></>;
    case 'kido-phi':
      return <><Panel x={83} y={82} w={170} h={195}><rect x="105" y="128" width="56" height="26" rx="13" className="concept-top" /><Dot x={204} y={141} r={15} /><rect x="105" y="178" width="48" height="61" rx="5" fill="none" /><Line d="M177 184 h50 M177 205 h50 M177 226 h32" /></Panel><Line d="M269 183 H317" dash /><Panel x={331} y={101} w={180} h={157}><rect x="351" y="145" width="49" height="87" rx="3" fill="none" /><Line d="M419 148 h68 M419 168 h47" /><rect x="419" y="202" width="68" height="27" rx="13" className="concept-top" /></Panel></>;
    case 'kido-omicron':
      return <><Cube x={105} y={287} w={350} h={25} d={45} accent /><Label x={280} y={281} textAnchor="middle" small>Shared ports + harness policy</Label>{['Chat', 'Code', 'Bot', 'CoWork', 'Design'].map((name, i) => <g key={name}><Line d={`M${116 + i * 82} 209 V248`} dash /><rect x={86 + i * 82} y={102 + (i % 2) * 27} width="68" height="100" rx="5" className="concept-front" /><Line d={`M${100 + i * 82} ${129 + (i % 2) * 27} h40 M${100 + i * 82} ${145 + (i % 2) * 27} h25`} faint /><Label x={120 + i * 82} y={185 + (i % 2) * 27} textAnchor="middle" small>{name}</Label></g>)}</>;
    case 'kido-kappa':
      return <><Floor /><Line d="M115 224 V99 L207 53 H407 V200 M115 99 H315 L407 53 M315 99 V246" dash /><Cube x={244} y={250} w={110} h={76} d={38} accent /><Label x={299} y={224} textAnchor="middle">OS</Label><Panel x={73} y={184} w={111} h={90}><Line d="M88 226 l10 9-10 9 M113 244 h34" /></Panel><Line d="M369 249 H487 V185" dash /><Dot x={487} y={180} r={7} /></>;
    case 'itio-nu':
      return <><Line d="M77 84 V64 H523 V84 M77 285 V305 H523 V285" faint /><Label x={300} y={53} textAnchor="middle" small>ITIO-WIDE</Label><Graph x={178} y={142} size={38} /><Sheet x={340} y={88} w={76} h={84} lines={2} /><Sheet x={359} y={102} w={76} h={84} lines={2} /><Panel x={120} y={221} w={120} h={65}><Line d="M134 260 h35 M186 260 h39" /></Panel><circle cx="386" cy="250" r="32" fill="none" /><Dot x={386} y={218} /><Dot x={358} y={266} /><Dot x={414} y={266} /><Label x={255} y={150} textAnchor="middle" small>Orbit</Label><Label x={477} y={150} textAnchor="middle" small>Gnosis</Label><Label x={275} y={262} textAnchor="middle" small>Grove</Label><Label x={477} y={262} textAnchor="middle" small>Nous</Label></>;
    case 'omega':
      return <><Cube x={71} y={247} w={110} h={13} d={36} /><Cube x={97} y={230} w={31} h={37} d={14} /><Label x={143} y={284} textAnchor="middle">Machine</Label><Panel x={241} y={86} w={119} h={104}><Line d="M255 144 h20 l12-23 15 43 13-26 h28" /></Panel><Label x={300} y={223} textAnchor="middle">OS</Label><Cube x={401} y={247} w={110} h={13} d={36} /><Cube x={424} y={229} w={44} h={69} d={20} accent /><Cube x={441} y={158} w={14} h={25} d={10} /><Label x={472} y={284} textAnchor="middle">Factory</Label></>;
    case 'kido-commerce':
      return <><Floor /><Line d="M340 103 H454 V246 H340 Z M340 151 H454 M340 198 H454" /><Cube x={351} y={146} w={32} h={27} d={12} /><Cube x={404} y={191} w={32} h={27} d={12} /><Cube x={160} y={281} w={139} h={71} d={35} accent /><Panel x={176} y={123} w={87} h={66}><Line d="M191 164 h47" /></Panel><Line d="M218 189 V210" /><Sheet x={85} y={148} w={63} h={78} lines={2} /><Line d="M299 245 H326 V215" dash /></>;
    case 'kido-weave':
      return <><Sheet x={82} y={65} w={75} h={92} lines={2} /><Sheet x={73} y={211} w={75} h={92} lines={2} /><Speech x={178} y={80} w={91} h={57} /><Line d="M169 122 C228 134 225 183 302 190 M160 254 C240 254 225 209 302 190" dash /><Graph x={388} y={185} size={79} /><circle cx="388" cy="185" r="111" className="concept-muted" fill="none" strokeDasharray="3 8" /></>;
    case 'kido-loom':
      return <><Line d="M84 277 L167 99 H455 L507 277 Z M108 253 H482 M153 127 H465" faint /><Panel x={145} y={73} w={294} h={190}><Graph x={228} y={168} size={44} /><Line d="M299 117 V237" faint /><rect x="322" y="121" width="92" height="112" rx="3" fill="none" /><Line d="M334 145 h68 M334 165 h28 v49 h-28 Z M374 165 h28 M374 184 h28" /></Panel><Line d="M115 291 H485 M145 283 V299 M439 283 V299" faint /></>;
    case 'kido-fabric':
      return <><Cube x={102} y={296} w={349} h={12} d={42} /><Panel x={122} y={67} w={333} h={195}><Line d="M191 91 V262" faint /><Line d="M137 120 h38 M137 146 h27 M137 172 h33" /><rect x="210" y="111" width="102" height="56" rx="4" className="concept-top" /><rect x="328" y="111" width="105" height="56" rx="4" fill="none" /><Line d="M211 192 h221 M211 216 h221 M211 239 h154" faint /><Dot x={226} y={139} /><Line d="M243 139 h48 M344 138 h65" /></Panel></>;
    case 'kido-sew':
      return <><Floor /><Cube x={185} y={285} w={205} h={144} d={55} accent /><Line d="M215 258 V172 H353 V258 Z" dash /><Graph x={280} y={218} size={34} /><Line d="M390 210 H477 V137" /><Dot x={477} y={130} r={12} /><Dot x={440} y={94} r={7} /><Dot x={514} y={94} r={7} /><Line d="M477 118 L445 100 M477 118 L509 100" /><Label x={295} y={113} textAnchor="middle">Domain service</Label></>;
    case 'kido-stitch':
      return <><Panel x={239} y={47} w={122} h={63} /><Line d="M300 110 V149 M300 194 V225 H139 V252 M300 225 V252 M300 225 H461 V252" /><rect x="201" y="150" width="198" height="44" rx="6" className="concept-top" /><Label x={300} y={179} textAnchor="middle">Compose + route</Label>{[99, 260, 421].map((x) => <g key={x}><Cube x={x} y={307} w={65} h={46} d={24} /><Graph x={x + 32} y={283} size={13} /></g>)}</>;
    case 'kido-chat':
      return <><Panel x={92} y={60} w={416} h={244}><Speech x={130} y={109} w={143} h={62} /><Speech x={309} y={192} w={155} h={62} flip /><Dot x={407} y={131} r={25} /><circle cx="407" cy="124" r="7" fill="none" /><Line d="M392 145 Q407 130 422 145" /><Label x={407} y={178} textAnchor="middle" small>Profile</Label><Label x={165} y={270} small>No tools</Label></Panel></>;
    case 'kido-code':
      return <><Line d="M110 194 H477 M170 194 C200 194 190 114 230 114 H337 C375 114 361 194 394 194" /><Dot x={112} y={194} /><Dot x={170} y={194} /><Dot x={242} y={114} /><Dot x={329} y={114} /><Dot x={401} y={194} /><Dot x={477} y={194} /><Sheet x={219} y={225} w={89} h={87} lines={2} accent /><Label x={263} y={249} textAnchor="middle" small>Brain</Label><Line d="M263 215 V137" dash /><Line d="M388 218 V156 H438 V218" /><circle cx="413" cy="143" r="12" fill="none" /><Line d="M411 167 V198 M401 179 H425" /><Label x={411} y={248} textAnchor="middle" small>Approval</Label><Label x={287} y={91} textAnchor="middle" small>Branch / MR / PR</Label></>;
    case 'kido-bot':
      return <><Panel x={304} y={74} w={212} h={222}><Label x={410} y={120} textAnchor="middle">Room</Label><Speech x={340} y={184} w={135} h={53} flip /></Panel><rect x="102" y="105" width="158" height="157" rx="7" className="concept-front" /><Label x={181} y={138} textAnchor="middle">Bot record</Label><Line d="M120 156 h122" faint /><Label x={181} y={180} textAnchor="middle" small>Profile</Label><Label x={181} y={209} textAnchor="middle" small>Trigger</Label><Label x={181} y={238} textAnchor="middle" small>Room</Label><Line d="M339 158 H275 M281 152 l-6 6 6 6 M260 224 H316 M310 218 l6 6-6 6" /><Dot x={339} y={158} r={6} /></>;
    case 'kido-cowork':
      return <><Panel x={76} y={82} w={174} h={189}><Speech x={99} y={132} w={125} h={67} /></Panel><Line d="M250 176 H286 M330 176 H373" /><rect x="286" y="147" width="44" height="60" rx="6" className="concept-top" /><Line d="M295 137 V147 M311 137 V147 M296 207 V217 M312 207 V217" /><Sheet x={387} y={87} w={121} h={175} lines={6} accent /><Line d="M385 280 H510" faint /></>;
    case 'kido-design':
      return <><Speech x={76} y={115} w={116} h={87} /><Panel x={231} y={67} w={282} h={224}><Line d="M264 251 L303 130 L449 156 L469 251 Z" faint dash /><path d="M277 226 C288 106 412 131 451 229" fill="none" /><Line d="M277 226 L306 130 M451 229 L408 135" /><Dot x={277} y={226} r={6} /><Dot x={306} y={130} r={6} /><Dot x={408} y={135} r={6} /><Dot x={451} y={229} r={6} /><Line d="M303 252 H447" faint /></Panel><Line d="M171 276 l55-63 12 11-55 63-16 5 Z M226 213 l12 11" /></>;
    case 'kido-os':
      return <><Floor /><Line d="M290 190 V105 M290 215 H145 M360 215 H475 M290 240 V305" dash /><Cube x={248} y={253} w={87} h={77} d={35} accent /><Label x={291} y={225} textAnchor="middle">Core</Label><Cube x={252} y={104} w={65} h={35} d={23} /><Cube x={94} y={235} w={65} h={35} d={23} /><Cube x={435} y={235} w={65} h={35} d={23} /><Dot x={290} y={305} r={8} /><Dot x={191} y={215} /><Dot x={404} y={215} /><Dot x={290} y={139} /></>;
    case 'kido-computer':
      return <><Cube x={128} y={298} w={294} h={12} d={64} /><Line d="M128 286 V114 H422 V286 M128 114 l64-32 H486 V254 L422 286 M422 114 l64-32" dash /><Panel x={179} y={139} w={187} h={107}><rect x="198" y="180" width="51" height="44" rx="3" fill="none" /><Line d="M264 183 h80 M264 202 h62 M264 221 h71" /></Panel><Line d="M250 246 V264 H301 M275 246 V264" /></>;
    case 'kido-cli':
      return <><Panel x={94} y={63} w={168} h={91}><Line d="M113 109 l12 10-12 10 M139 129 h36" /><Label x={222} y={131} textAnchor="middle" small>CLI</Label></Panel><Panel x={338} y={63} w={168} h={91}><rect x="357" y="103" width="30" height="32" rx="3" fill="none" /><Line d="M399 108 h83 M399 128 h60" /></Panel><Line d="M177 154 V189 H423 V154 M300 189 V222" /><rect x="97" y="222" width="406" height="72" rx="7" className="concept-front" />{[165, 300, 435].map((x) => <g key={x}><Dot x={x} y={222} r={8} /><Line d={`M${x} 232 V258`} /></g>)}<Label x={165} y={279} textAnchor="middle" small>Conversations</Label><Label x={300} y={279} textAnchor="middle" small>Room messages</Label><Label x={435} y={279} textAnchor="middle" small>Configuration</Label></>;
    case 'kido-orbit':
      return <><circle cx="300" cy="180" r="133" fill="none" className="concept-muted" strokeDasharray="3 8" /><Graph x={300} y={178} size={93} /><Line d="M221 216 l-1-13 M221 216 l13-4 M292 97 l-12 7 M292 97 l1 14 M388 214 l-2-13 M388 214 l-13-4" /><Label x={300} y={65} textAnchor="middle">A</Label><Label x={180} y={246} textAnchor="middle">B</Label><Label x={420} y={246} textAnchor="middle">C</Label><Line d="M218 279 Q300 321 382 279" faint dash /></>;
    case 'kido-gnosis':
      return <><Cube x={110} y={292} w={239} h={24} d={35} /><Sheet x={119} y={99} w={94} h={162} lines={6} /><Sheet x={151} y={82} w={94} h={162} lines={6} /><Sheet x={183} y={65} w={94} h={162} lines={6} /><Sheet x={352} y={78} w={107} h={123} lines={3} /><Line d="M280 143 H336" dash /><circle cx="400" cy="236" r="44" className="concept-front" /><circle cx="400" cy="236" r="31" fill="none" /><Line d="M432 268 l47 47 M439 260 l47 47" /><Line d="M385 235 h30 M400 220 v30" /></>;
    case 'kido-grove':
      return <><Panel x={82} y={58} w={436} h={246}><Line d="M202 82 V304" faint /><Line d="M103 110 h72 M103 135 h54 M103 161 h66" /><Dot x={112} y={202} /><Dot x={112} y={233} /><Dot x={112} y={264} /><Line d="M127 202 h47 M127 233 h55 M127 264 h37" faint /><Sheet x={226} y={110} w={94} h={159} lines={6} accent /><Sheet x={343} y={110} w={146} h={66} lines={1} /><Sheet x={343} y={198} w={146} h={71} lines={1} /></Panel></>;
    case 'kido-nous':
      return <><circle cx="300" cy="190" r="75" fill="none" /><circle cx="300" cy="190" r="57" fill="none" className="concept-muted" /><Line d="M300 115 V83 M235 227 L190 254 M365 227 L410 254" /><Graph x={300} y={65} size={29} /><Cube x={117} y={284} w={70} h={56} d={24} /><circle cx="153" cy="247" r="9" fill="none" /><Line d="M136 271 Q153 250 170 271" /><rect x="411" y="226" width="71" height="60" rx="8" className="concept-top" /><Line d="M425 216 V226 M445 216 V226 M466 216 V226 M425 286 V296 M445 286 V296 M466 286 V296" /><Line d="M276 190 h48 M300 166 v48" /><Dot x={300} y={190} r={9} /></>;
    case 'yai':
      return <><Sheet x={94} y={66} w={164} h={221} lines={0} /><Label x={123} y={123}>λ</Label><Line d="M161 116 h67 M123 153 h105 M123 186 h48 M184 186 h44 M123 219 h82" /><Line d="M280 174 H315 M308 167 l7 7-7 7" dash /><Sheet x={339} y={66} w={164} h={221} lines={0} accent /><Graph x={421} y={181} size={49} /></>;
    case 'omega-machine':
      return <><Floor /><Cube x={128} y={288} w={300} h={18} d={52} /><Line d="M176 247 H381 M208 231 V269 M296 231 V269 M376 231 V269" /><Cube x={170} y={254} w={43} h={31} d={16} /><Cube x={260} y={254} w={43} h={31} d={16} /><Cube x={350} y={254} w={43} h={31} d={16} /><Line d="M156 206 V127 H432 V206 M156 127 l46-23 H478 V183 L432 206" dash /><Graph x={296} y={161} size={43} /></>;
    case 'omega-os':
      return <><Cube x={108} y={296} w={349} h={12} d={40} />{[145, 265, 385].map((x) => <g key={x}><Cube x={x} y={267} w={57} h={50} d={21} /><Line d={`M${x + 28} 211 V186`} dash /></g>)}<Panel x={139} y={63} w={320} h={116}><Line d="M163 133 h45 l15-25 20 46 21-32 h57 l15-20 19 39 16-12 h63" /><Dot x={174} y={102} r={4} /></Panel><Line d="M118 96 V194 M480 96 V194 M110 96 h16 M472 96 h16" faint /></>;
    case 'omega-factory':
      return <><Floor /><Line d="M137 244 H239 V282 H364 V213 H465" /><Cube x={106} y={234} w={70} h={49} d={25} /><Cube x={258} y={271} w={74} h={104} d={32} accent /><Cube x={409} y={205} w={67} h={58} d={26} /><Cube x={283} y={167} w={25} h={43} d={19} /><Dot x={223} y={244} r={6} /><Dot x={364} y={262} r={6} /><Line d="M118 161 l46-23 31 16 M429 127 l34-17 32 16" faint /><Label x={303} y={227} textAnchor="middle">Ω</Label></>;
    case 'devspace':
      return <><Floor /><Cube x={102} y={281} w={116} h={18} d={37} /><Cube x={286} y={281} w={64} h={39} d={37} /><Cube x={358} y={245} w={64} h={54} d={37} /><Cube x={430} y={209} w={64} h={70} d={37} accent /><Line d="M213 262 H269" dash /><Line d="M460 131 V55 l63 20-63 21" /><Label x={247} y={304} textAnchor="middle" small>Gap</Label><Line d="M132 209 Q125 122 245 101 H395" dash /><Dot x={132} y={209} r={6} /></>;
    case '28-kampus':
      return <><path d="M81 139 Q143 119 210 157 Q277 119 339 139 V270 Q277 250 210 288 Q143 250 81 270 Z M210 157 V288" className="concept-front" /><Line d="M104 170 Q147 158 186 178 M104 195 Q147 183 186 203 M104 220 Q147 208 186 228 M235 183 Q271 163 314 172" faint /><Cube x={296} y={277} w={42} h={16} d={18} /><Cube x={357} y={247} w={42} h={29} d={18} /><Cube x={418} y={217} w={42} h={42} d={18} /><Line d="M450 165 V97 M450 136 Q412 142 418 112 Q444 108 450 136 M450 118 Q486 121 485 88 Q457 86 450 118" /></>;
    case 'itio-space':
      return <><Floor /><Line d="M189 283 V86 Q300 17 411 86 V283 M219 268 V104 Q300 53 381 104 V268 M189 86 L219 104 M411 86 L381 104" /><Line d="M237 278 L277 236 M300 283 V224 M365 278 L330 236" dash /><Cube x={253} y={211} w={69} h={42} d={24} accent /><Cube x={95} y={232} w={48} h={42} d={20} /><Cube x={455} y={232} w={48} h={42} d={20} /></>;
    case 'kido-brain':
      return <><Line d="M98 268 V99 H172 L194 119 H338 V268 Z" /><Sheet x={121} y={80} w={91} h={151} lines={0} /><Label x={166} y={103} textAnchor="middle" small>plan.md</Label><Sheet x={163} y={108} w={100} h={151} lines={0} /><Label x={213} y={132} textAnchor="middle" small>tasks.md</Label><Sheet x={207} y={136} w={116} h={151} lines={0} accent /><Label x={265} y={185} textAnchor="middle" small>handoff.md</Label><Line d="M225 207 h78 M225 228 h61 M225 249 h72" faint /><Line d="M107 299 H314 M135 299 V279 M193 299 V282" /><Dot x={135} y={299} /><Dot x={193} y={299} /><Dot x={298} y={299} /><Cube x={396} y={254} w={92} h={99} d={28} /><Label x={441} y={190} textAnchor="middle" small>Project</Label><Label x={441} y={214} textAnchor="middle" small>repo</Label><Line d="M346 232 H376" dash /></>;
    case 'kido-skill':
      return <><Panel x={66} y={127} w={127} h={116}><Line d="M85 173 l12 10-12 10 M108 193 h51" /></Panel><Panel x={407} y={127} w={127} h={116}><Line d="M428 171 h82 M428 192 h65 M428 212 h73" /></Panel><Line d="M193 184 H224 M376 184 H407" dash /><Sheet x={232} y={64} w={136} h={221} lines={0} accent /><Label x={300} y={107} textAnchor="middle">/kido</Label>{['Story', 'Develop', 'Review', 'Handoff', 'Close'].map((text, i) => <g key={text}><Dot x={251} y={136 + i * 29} r={3} /><Label x={270} y={141 + i * 29} small>{text}</Label></g>)}<Line d="M300 288 V307 H406" dash /><Sheet x={418} y={270} w={74} h={53} lines={0} /><Label x={455} y={302} textAnchor="middle" small>Brain</Label></>;
    default:
      throw new Error(`Missing product illustration: ${slug}`);
  }
}

export default function ProductConcept({ product }) {
  const concept = productConcepts[product.slug];
  const id = `concept-${product.slug}`;
  return (
    <figure className="product-concept" aria-labelledby={`${id}-caption`} data-concept={product.slug}>
      <div className="concept-eyebrow"><span>Concept study</span><span aria-hidden="true">{product.letter || 'ITIO'} / LINE ART</span></div>
      <svg viewBox="0 0 600 360" width="600" height="360" role="img" aria-labelledby={`${id}-title ${id}-description`} className="concept-drawing" focusable="false">
        <title id={`${id}-title`}>{product.name}: {concept.title}</title>
        <desc id={`${id}-description`}>{concept.description} A conceptual illustration, not a released architecture or deployment diagram.</desc>
        <defs><pattern id={`${id}-grid`} width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="currentColor" strokeWidth="0.6" /></pattern></defs>
        <rect width="600" height="360" fill={`url(#${id}-grid)`} className="concept-grid" />
        <g fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" strokeLinecap="round">
          <g className="concept-registration"><path d="M22 32h18M31 23v18M560 32h18M569 23v18M22 328h18M31 319v18M560 328h18M569 319v18" /><path d="M53 328h13m8 0h13m8 0h13" /></g>
          <Scene slug={product.slug} />
        </g>
      </svg>
      <figcaption id={`${id}-caption`} className="concept-caption">
        <p className="concept-title">{concept.title}</p>
        <ul className="concept-key">{concept.labels.map((label) => <li key={label}>{label}</li>)}</ul>
        <p className="concept-note">Conceptual illustration. See current scope &amp; status below.</p>
      </figcaption>
    </figure>
  );
}
