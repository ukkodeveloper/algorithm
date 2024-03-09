def solution(answers):
    # 수포자별 찍기 패턴     
    patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    # 수포자별 점수 구하기
    scores = [0, 0, 0]
    
    for i, answer in enumerate(answers):
        for j, pattern in enumerate(patterns):
            if answer == pattern[i % len(pattern)]:
                scores[j] += 1
    
    # 최고 점수
    highest = max(scores)
    
    # 최고 점수자 명단 구하기
    result = []
    for i, score in enumerate(scores):
        if highest == score:
            result.append(i + 1)
    
    
    return result