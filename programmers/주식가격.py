def solution(prices):
    stack = []
    n = len(prices)
    result = [0] * n
    
    for i, price in enumerate(prices):
        while stack and price < prices[stack[-1]]:
            j = stack.pop()
            result[j] = i - j
        stack.append(i)
        
    while stack:
        j = stack.pop()
        result[j] = n - 1 - j
            
    return result