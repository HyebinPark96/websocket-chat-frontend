import { create } from "zustand";

const useStore = create(set => ({
    name: '',
    setName: (newName) => set(() => ({name: newName}))
}))

export default useStore