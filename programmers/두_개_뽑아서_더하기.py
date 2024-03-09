def solution(numbers):
    nums_length = len(numbers)
    result = []
        
    for i in range(nums_length - 1):
        for j in range(i + 1, nums_length):
            result.append(numbers[i] + numbers[j])
    
    result = sorted(set(result))
    return result