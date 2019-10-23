//22:15
import React from 'react';
import './SortingComponent.css'
import { mergeSort } from '../sortingAlgorithms/sortingAlgorithms';

export default class SortingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testArray: []
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 50; i++) {
            array.push(randomIntFromInverval(10, 500));
        }
        this.setState({ testArray: array });
        console.log('test')
        console.log('test22211')
    }

    MergeSort() {

        let jsSortedArray = []
        jsSortedArray = [...this.state.testArray]
        jsSortedArray = jsSortedArray.sort(function(a, b){return a-b});
        const mySortedArray = mergeSort(this.state.testArray);

        console.log(this.state.testArray);
        console.log('--------------------')
        console.log(jsSortedArray);
        console.log(mySortedArray);
        console.log(arraysAreEqual(jsSortedArray, mySortedArray));

    }

    BubbleSort() {
        console.log('Bubble Sort')
    }

    SelectionSort() {
        console.log('Selection Sort')
    }

    QuickSort() {
        console.log('Quick Sort')
    }

    InsertionSort() {
        console.log('Insertion Sort')
    }

    Heapsort() {
        console.log('Heapsort')
    }

    BucketSort() {
        console.log('Bucket Sort')
    }

    CountingSort() {
        console.log('Counting Sort')
    }

    RadixSort() {
        console.log('Radix Sort')
    }

    TimsortSort() {
        console.log('TimsortSort')
    }


    render() {
        const { testArray } = this.state;
        return (
            <div className="array-container">
                {testArray.map((value, idx) => (
                    <div 
                    className="array-bar" 
                    key={idx}
                    style={{height: `${value}px`}}>  
                    </div>

                ))
                }
                <div>
                    <button onClick={ () => this.resetArray()}>Reset Array</button>
                </div>
                <div>
                    <button onClick={ () => this.MergeSort()}>Merge Sort</button>
                    <button onClick={ () => this.BubbleSort()}>Bubble Sort</button>
                    <button onClick={ () => this.SelectionSort()}>Selection Sort</button>
                    <button onClick={ () => this.QuickSort()}>Quick Sort</button>
                    <button onClick={ () => this.InsertionSort()}>Insertion Sort</button>
                    <button onClick={ () => this.Heapsort()}>Heapsort</button>
                    <button onClick={ () => this.BucketSort()}>Bucket Sort</button>
                    <button onClick={ () => this.CountingSort()}>Counting Sort</button>
                    <button onClick={ () => this.RadixSort()}>Radix Sort</button>
                    <button onClick={ () => this.TimsortSort()}>Timsort</button>
                </div>
            </div>
        );
    }
}

function randomIntFromInverval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arraysAreEqual(arr1, arr2) {

if(arr1.length !== arr2.length){
        console.log("Arrays are not equal")
        return false;

}

    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i]){
        console.log("Arrays are not equal")
                    return false;
        }   
    }

    console.log("Arrays are EQUAL!")
    return true;

}


