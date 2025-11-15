## Problem Summary
Given a total number of propulsion units `n`.  
There are two types of crafts:
- Type A → 4 units
- Type B → 6 units

If `n` cannot be made using only 4s and 6s, output `-1`.

## Key Insight
- Both 4 and 6 are **even**, so `n` must be **even**.
- Maximum crafts → use Type A only.
- Minimum crafts → use Type B as much as possible, then Type A.

## Files
- `cargo_craft.cpp` — C++ solution (compatible with C++17+)
- `input.txt` — txt file that contains pre-entered input

## How to Compile and Run
1. cd B
2. g++ -std=c++17 cargo_craft.cpp -o cargo_craft
3. ./cargo_craft < input.txt
