def total_energy(energy_value: int, num_waves: int) -> int:
    """    
    If num_waves is even: waves cancel -> total = 0
    If num_waves is odd: one extra +x -> total = x
    """
    return 0 if num_waves % 2 == 0 else energy_value


def solve():
    import sys
    input_data = sys.stdin.read().strip().split()
    num_use_cases = int(input_data[0])

    index = 1
    results = []

    for _ in range(num_use_cases):
        energy_value = int(input_data[index])
        num_waves = int(input_data[index + 1])
        index += 2

        results.append(str(total_energy(energy_value, num_waves)))

    print("\n".join(results))


if __name__ == "__main__":
    solve()