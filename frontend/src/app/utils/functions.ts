import { Subscription } from "rxjs";
const typeCache: { [label: string]: boolean } = {};

export function type<T>(label: T | ""): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }
  typeCache[<string>label] = true;
  return <T>label;
}

export const unsubscribeSubscriptions = (
  subscriptions: Subscription[]
): void => {
  for (const sub of subscriptions) {
    sub.unsubscribe();
  }
};
