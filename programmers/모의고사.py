def solution(answers):
    result = []
    
    # 학생별 반복 숫자
    person_1 = [1, 2, 3, 4, 5]
    person_2 = [2, 1, 2, 3, 2, 4, 2, 5]
    person_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
        
    # 학생 점수 구하기
    score_1, score_2, score_3 = 0, 0, 0
    
    for i in range(len(answers)):
        answer = answers[i]
        answer_1 = person_1[i % len(person_1)]
        answer_2 = person_2[i % len(person_2)]
        answer_3 = person_3[i % len(person_3)]
        
        if (answer == answer_1):
            score_1 += 1
        if (answer == answer_2):
            score_2 += 1
        if (answer == answer_3):
            score_3 += 1
            
    # 최고 점수자 구하기
    max_score = max(score_1, score_2, score_3)
    if (score_1 == max_score):
        result.append(1)
    if (score_2 == max_score):
        result.append(2)
    if (score_3 == max_score):
        result.append(3)
    
    return result
    
    