import { useEffect, useState } from "react"; 
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { quickSort } from "../../sorters/quicksort";
import { mergeSort } from "../../sorters/mergesort";
import { heapSort } from "../../sorters/heapsort";

const Header = ({ sendArray }) => {
    const [sliderValue, setSliderValue] = useState(20);
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    const handleChange = (value) => {
        if (!isSorting) {
            makeArray(value);
        }
    }

    useEffect(() => {
        makeArray(11);
    }, [])

    const shuffleNumbers = (to) => {
        const array = Array.from({ length: to }, (_, i) => i + 1);
        array.sort(() => Math.random() - 0.5);
        return array;
    }

    const makeArray = (value) => {
        setSliderValue(value);
        const shuffledArray = shuffleNumbers(sliderValue);
        setArray(shuffledArray);
        sendArray(shuffledArray, undefined);
    }

    return (
        <header className="flex flex-col sm:flex-row m-5 py-2 px-10 border border-black rounded-md justify-center sm:justify-between items-end overflow-auto">
            <div>
                <h1 className="text-4xl text-center tracking-wide bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
                    Column Organizer
                </h1>

            </div>
            <div className="w-[300px] min-w-32 p-3 mt-1">
                <Slider
                    defaultValue={[20]}
                    min={10}
                    max={100}
                    step={1}
                    onValueChange={handleChange}
                />
            </div>
            <div className="flex items-center justify-between w-[280px] gap-2 mt-2">
                <Button onClick={() => quickSort(array, sendArray, 50, setIsSorting)}>QuickSort</Button>
                <Button onClick={() => mergeSort(array, sendArray, 50, setIsSorting)}>MergeSort</Button>
                <Button onClick={() => heapSort(array, sendArray, 50, setIsSorting)}>HeapSort</Button>
            </div>
        </header>
    );
}
 
export default Header;