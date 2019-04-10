package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	// arr := []int{1, 3, 0, 4, 2}
	// insertionSort(arr)
	// fmt.Println(arr)

	fmt.Println("Creating Arrays")
	start := time.Now()
	arr := randomArray(200000)
	fmt.Println("  - ", time.Since(start))

	fmt.Println("Running Insertion Sort")
	start = time.Now()
	insertionSort(arr)
	fmt.Println("  - ", time.Since(start))
}

func insertionSort(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		currVal := arr[i]
		j := i - 1

		for j >= 0 && currVal < arr[j] {
			arr[j+1] = arr[j]
			j--
		}
		arr[j+1] = currVal
	}
	return arr
}

func randomArray(len int) []int {
	a := make([]int, len)
	for i := 0; i <= len-1; i++ {
		a[i] = rand.Intn(len)
	}
	return a
}
