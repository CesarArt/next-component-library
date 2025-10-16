import { colorByPercentageI } from "../types/charts";
import { favoriteComponents, GroupedComponent } from "../types/stats";

export function getColorGradientByPercentage(value:number, maxValue:number, colorByPercentage:colorByPercentageI[]) {
    const porcentaje = ((value / maxValue) * 100)
    const colorFound =  colorByPercentage.find(c => porcentaje >= c.min && porcentaje <= c.max)?.color ?? "from-stone-500 to-stone-500"

    return colorFound
}


export function findMostFrequent(data:favoriteComponents[], key: keyof favoriteComponents ) {
  const counts = data.reduce<Record<string, number>>((acc, item) => {
    const value = item[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  let mostFrequentValue = '';
  let maxCount = 0;

  for (const value in counts) {
    if (counts[value] > maxCount) {
      maxCount = counts[value];
      mostFrequentValue = value;
    }
  }

  return mostFrequentValue;
}

export function groupFavoritesByComponent(favorites: favoriteComponents[]){
const componentMap = new Map<string, { [variant: string]: number }>();

  favorites.forEach(item => {
    const { component, variant } = item;

    const variantsCount = componentMap.get(component) || {};

    variantsCount[variant] = (variantsCount[variant] || 0) + 1;

    componentMap.set(component, variantsCount);
  });

  const result: GroupedComponent[] = [];
  
  componentMap.forEach((variantsCount, componentName) => {
    result.push({
      component: componentName,
      variants: [variantsCount]
    });
  });

  return result;
}