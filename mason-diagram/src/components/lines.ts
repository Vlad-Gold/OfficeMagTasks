import { nodes } from "./nodes";
import { GAP, getNodeEdge, makeLine, type Line } from "./geometry";

export function generateLines(): Line[] {
  const nodeMap = new Map(nodes.map(n => [n.id, n]));
  
  const allixar = nodeMap.get('allixar')!;
  const stanislav = nodeMap.get('stanislav')!;
  const duHast = nodeMap.get('duHast')!;
  const dmitriy = nodeMap.get('dmitriy')!;
  
  const allixarBottom = getNodeEdge(allixar, 'bottom');
  const allixarRight = getNodeEdge(allixar, 'right');
  const stanislavLeft = getNodeEdge(stanislav, 'left');
  const stanislavRight = getNodeEdge(stanislav, 'right');
  const stanislavBottom = getNodeEdge(stanislav, 'bottom');
  
  const middleX = duHast.x - GAP;
  const leftX = dmitriy.x - GAP;
  const rightX = dmitriy.x + (dmitriy.width || 200) + GAP;
  
  return [
    {
      id: 'allixar_to_anton',
      path: makeLine(allixarBottom.x, allixarBottom.y, allixarBottom.x, getNodeEdge(nodeMap.get('anton')!, 'left').y),
      arrow: true,
      arrowDirection: 'reverse'
    },
    {
      id: 'allixar_to_igor',
      path: makeLine(allixarBottom.x, allixarBottom.y, allixarBottom.x, getNodeEdge(nodeMap.get('igor')!, 'left').y) + 
            makeLine(allixarBottom.x, getNodeEdge(nodeMap.get('igor')!, 'left').y, getNodeEdge(nodeMap.get('igor')!, 'left').x, getNodeEdge(nodeMap.get('igor')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'allixar_to_anton_alt',
      path: makeLine(allixarBottom.x, allixarBottom.y, allixarBottom.x, getNodeEdge(nodeMap.get('anton')!, 'left').y) + 
            makeLine(allixarBottom.x, getNodeEdge(nodeMap.get('anton')!, 'left').y, getNodeEdge(nodeMap.get('anton')!, 'left').x, getNodeEdge(nodeMap.get('anton')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'allixar_to_stanislav',
      path: makeLine(allixarBottom.x, allixarBottom.y, allixarBottom.x, stanislavLeft.y) + 
            makeLine(allixarBottom.x, stanislavLeft.y, stanislavLeft.x, stanislavLeft.y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'allixar_to_middle',
      path: makeLine(allixarRight.x, allixarRight.y, middleX, allixarRight.y),
      arrow: true,
      arrowDirection: 'reverse'
    },
    {
      id: 'middle_to_anastasia',
      path: makeLine(middleX, allixarRight.y, middleX, getNodeEdge(nodeMap.get('anastasia')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'middle_to_duhast',
      path: makeLine(middleX, allixarRight.y, getNodeEdge(nodeMap.get('duHast')!, 'left').x, getNodeEdge(nodeMap.get('duHast')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'middle_to_anastasia_alt',
      path: makeLine(middleX, allixarRight.y, middleX, getNodeEdge(nodeMap.get('anastasia')!, 'left').y) + 
            makeLine(middleX, getNodeEdge(nodeMap.get('anastasia')!, 'left').y, getNodeEdge(nodeMap.get('anastasia')!, 'left').x, getNodeEdge(nodeMap.get('anastasia')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'stanislav_to_alexandr',
      path: makeLine(stanislavRight.x, stanislavRight.y, getNodeEdge(nodeMap.get('alexandr')!, 'left').x, getNodeEdge(nodeMap.get('alexandr')!, 'left').y),
      arrow: true,
      arrowDirection: 'reverse'
    },
    {
      id: 'olga_to_dmitriy',
      path: makeLine(getNodeEdge(nodeMap.get('olga')!, 'right').x, getNodeEdge(nodeMap.get('olga')!, 'right').y, getNodeEdge(nodeMap.get('dmitriy')!, 'left').x, getNodeEdge(nodeMap.get('dmitriy')!, 'left').y),
      arrow: true,
      arrowDirection: 'reverse'
    },
    {
      id: 'dmitriy_left_vertical',
      path: makeLine(leftX, getNodeEdge(nodeMap.get('dmitriy')!, 'left').y, leftX, getNodeEdge(nodeMap.get('maxim')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'dmitriy_left_horizontal',
      path: makeLine(leftX, getNodeEdge(nodeMap.get('dmitriy')!, 'left').y, getNodeEdge(nodeMap.get('dmitriy')!, 'left').x, getNodeEdge(nodeMap.get('dmitriy')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'dmitriy_left_to_kristina',
      path: makeLine(leftX, getNodeEdge(nodeMap.get('dmitriy')!, 'left').y, leftX, getNodeEdge(nodeMap.get('kristina')!, 'left').y) + 
            makeLine(leftX, getNodeEdge(nodeMap.get('kristina')!, 'left').y, getNodeEdge(nodeMap.get('kristina')!, 'left').x, getNodeEdge(nodeMap.get('kristina')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'dmitriy_left_to_maxim',
      path: makeLine(leftX, getNodeEdge(nodeMap.get('maxim')!, 'left').y, getNodeEdge(nodeMap.get('maxim')!, 'left').x, getNodeEdge(nodeMap.get('maxim')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'stanislav_to_sergey',
      path: makeLine(stanislavBottom.x, stanislavBottom.y, stanislavBottom.x, getNodeEdge(nodeMap.get('sergey')!, 'left').y),
      arrow: true,
      arrowDirection: 'reverse'
    },
    {
      id: 'stanislav_to_ludmila',
      path: makeLine(stanislavBottom.x, stanislavBottom.y, stanislavBottom.x, getNodeEdge(nodeMap.get('ludmila')!, 'left').y) + 
            makeLine(stanislavBottom.x, getNodeEdge(nodeMap.get('ludmila')!, 'left').y, getNodeEdge(nodeMap.get('ludmila')!, 'left').x, getNodeEdge(nodeMap.get('ludmila')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'stanislav_to_olga',
      path: makeLine(stanislavBottom.x, stanislavBottom.y, stanislavBottom.x, getNodeEdge(nodeMap.get('olga')!, 'left').y) + 
            makeLine(stanislavBottom.x, getNodeEdge(nodeMap.get('olga')!, 'left').y, getNodeEdge(nodeMap.get('olga')!, 'left').x, getNodeEdge(nodeMap.get('olga')!, 'left').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'stanislav_to_sergey_alt',
      path: makeLine(stanislavBottom.x, stanislavBottom.y, stanislavBottom.x, getNodeEdge(nodeMap.get('sergey')!, 'left').y) + 
            makeLine(stanislavBottom.x, getNodeEdge(nodeMap.get('sergey')!, 'left').y, getNodeEdge(nodeMap.get('sergey')!, 'left').x, getNodeEdge(nodeMap.get('sergey')!, 'left').y),
      arrow: false,
      arrowDirection: 'reverse'
    },
    {
      id: 'dmitriy_right_vertical',
      path: makeLine(rightX, getNodeEdge(nodeMap.get('dmitriy')!, 'right').y, rightX, getNodeEdge(nodeMap.get('maxim')!, 'right').y),
      arrow: false,
      arrowDirection: 'forward'
    },
    {
      id: 'dmitriy_to_right',
      path: makeLine(getNodeEdge(nodeMap.get('dmitriy')!, 'right').x, getNodeEdge(nodeMap.get('dmitriy')!, 'right').y, rightX, getNodeEdge(nodeMap.get('dmitriy')!, 'right').y),
      arrow: true,
      arrowDirection: 'reverse'
    },
    {
      id: 'maxim_to_right',
      path: makeLine(getNodeEdge(nodeMap.get('maxim')!, 'right').x, getNodeEdge(nodeMap.get('maxim')!, 'right').y, rightX, getNodeEdge(nodeMap.get('maxim')!, 'right').y),
      arrow: false,
      arrowDirection: 'forward'
    }
  ];
}
