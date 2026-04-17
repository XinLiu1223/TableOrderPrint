import { useReducer } from "react";
import { BUTTON } from "../model/ProductFeed";

export interface ReducerType {
  selectedId: number | null;
  buttonItems: typeof BUTTON;
}

export type ActionType =
  | { type: "SELECT_ITEM"; selectedId: number | null }
  | { type: "DELETE_ITEM"; deletedId: number }
  | { type: "ADD_ITEM"; newItem: Omit<ReducerType["buttonItems"][0], "id"> }
  | { type: "UPDATE_ITEM"; editedItem: ReducerType["buttonItems"][0] };

export default function useButtonItemsReducer() {
  const [itemsReducer, itemsDispatcher] = useReducer(
    (itemsAndId: ReducerType, action: ActionType): ReducerType => {
      switch (action.type) {
        case "SELECT_ITEM":
          return {
            ...itemsAndId,
            selectedId: action.selectedId,
          };
        case "DELETE_ITEM":
          return {
            ...itemsAndId,
            buttonItems: itemsAndId.buttonItems.filter(
              (btn) => btn.id !== action.deletedId,
            ),
          };
        case "ADD_ITEM":
          return {
            ...itemsAndId,
            buttonItems: [
              ...itemsAndId.buttonItems,
              {
                ...action.newItem,
                id:
                  itemsAndId.buttonItems[itemsAndId.buttonItems.length - 1].id +
                  1,
              },
            ],
          };
        case "UPDATE_ITEM":
          return {
            ...itemsAndId,
            buttonItems: itemsAndId.buttonItems.map((btn) =>
              btn.id === action.editedItem.id ? action.editedItem : btn,
            ),
          };
        default:
          return itemsAndId;
      }
    },
    {
      selectedId: null,
      buttonItems: [...BUTTON],
    },
  );

  return { itemsReducer, itemsDispatcher };
}
