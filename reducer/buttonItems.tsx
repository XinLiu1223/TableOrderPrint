import { useReducer } from "react";
import { BUTTON } from "../model/ProductFeed";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface ReducerType {
  selectedId: number | null;
  buttonItems: typeof BUTTON;
}

export type ActionType =
  | { type: "SELECT_ITEM"; selectedId: number | null }
  | { type: "DELETE_ITEM"; deletedId: number }
  | { type: "ADD_ITEM"; newItem: Omit<ReducerType["buttonItems"][0], "id"> }
  | { type: "UPDATE_ITEM"; editedItem: ReducerType["buttonItems"][0] }
  | { type: "RESTORE"; initializedItem: ReducerType["buttonItems"] };

const storeBtnItems = async (newItems: ReducerType["buttonItems"]) => {
  try {
    const jsonItems = JSON.stringify(newItems);
    await AsyncStorage.setItem("buttonItems", jsonItems);
  } catch (error) {
    console.error(error);
  }
};

export default function useButtonItemsReducer() {
  const [itemsReducer, itemsDispatcher] = useReducer(
    (itemsAndId: ReducerType, action: ActionType): ReducerType => {
      switch (action.type) {
        case "RESTORE":
          return {
            ...itemsAndId,
            buttonItems: action.initializedItem,
          };
        case "SELECT_ITEM":
          return {
            ...itemsAndId,
            selectedId: action.selectedId,
          };
        case "DELETE_ITEM":
          storeBtnItems(
            itemsAndId.buttonItems.filter((btn) => btn.id !== action.deletedId),
          );
          return {
            ...itemsAndId,
            buttonItems: itemsAndId.buttonItems.filter(
              (btn) => btn.id !== action.deletedId,
            ),
          };
        case "ADD_ITEM":
          storeBtnItems([
            ...itemsAndId.buttonItems,
            {
              ...action.newItem,
              id:
                itemsAndId.buttonItems[itemsAndId.buttonItems.length - 1].id +
                1,
            },
          ]);
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
          storeBtnItems(
            itemsAndId.buttonItems.map((btn) =>
              btn.id === action.editedItem.id ? action.editedItem : btn,
            ),
          );
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
