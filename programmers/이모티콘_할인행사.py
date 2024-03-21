from itertools import product

def solution(users, emoticons):
    answer = [0, 0]
    rates = [10, 20, 30, 40]
    #d emoji 할인율 배열
    #d 최대값
    permutations = list(product(rates, repeat=len(emoticons)))
    
    #l 할인율배열 순회 >> 유저별 구매비용
    for p in permutations:
        plus = 0
        total = 0
        
        for user in users:
            [user_discount, user_price] = user
            user_spending = 0
            
            for i, e in enumerate(emoticons):
                if (p[i] >= user_discount):
                    user_spending += int(e * (100 - p[i]) * 0.01)
           
            if (user_spending >= user_price):
                plus += 1
            else:
                total += user_spending
        
        if (plus > answer[0]) or (plus == answer[0] and total > answer[1]):
            answer = [plus, total]  
                    
    return answer