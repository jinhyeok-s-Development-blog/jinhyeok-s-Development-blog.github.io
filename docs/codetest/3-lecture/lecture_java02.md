---
sidebar_position: 1
---

# 2. 대소문자 변환

---

## 목차

- 서론

  - [문제](#문제)
  - [사고 흐름](#사고-흐름)

- 본론

  - [문제 설명](#문제-설명)
  - [코드 전문](#코드-전문)

- 결론
  - [얻어 간 것](#얻어-간-것).
  - [더 찾아본 것](#더-찾아본-것).

---

## 문제

대문자-> 소문자, 소문자-> 대문자
(문자열은 영어 알파벳)

## 사고 흐름

1. 입력으로는 소문자와 대문자가 있는 문자열

2. 출력으로는 소문자와 대문자가 서로 변환된 문자열

3. 먼저 소문자와 대문자를 구분을 해야겠다  
   (for문 사용해서 반복을 돌리고 if문으로 조건을 이용하여 소문자와 대문자를 서로 변환)

---

## 문제 설명

### Step1 문자 입력받기

먼저 문자를 입력받는 것을 생각해야 한다.
입력 받는 것은 문자열 하나이다.  
그렇다면 입력은 Scanner로 문자열과 문자 하나로 받으면 된다.

```java
    class Main {
        public static int solution(String str, char c)
        {
        }
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        String str = in.next();
        char c = in.next();

        System.out.print(solution(str, c));
        return ;
    }
}
```

### Step2 대소문자 변환

문자 찾기 문제와 달리 이번 문제는 대소문자를 구분을 해야한다.  
그러므로 if문으로 대소문자를 구분하고 대문자일 경우 소문자로, 소문자일 경우 대문자로 변환하도록한다.

```java
import java.util.Scanner;

class Main {
    public static String solution(String str)
    {
        String answer = "";

        for (int i =0; i < str.length(); i++)
        {
            char c = str.charAt(i);
            if(Character.isUpperCase(c))
            {
                answer+=Character.toLowerCase(c);
            }
            else
            {
                answer+=Character.toUpperCase(c);
            }
        }
        return answer;
    }
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        String str = in.next();

        System.out.print(solution(str));
        return ;
    }
}

```

### step3 앞서 배운 for each 이용한 풀이

나의 경우에는 바로 for문을 사용했지만, 앞서 배운 방식인 for each문으로도 이를 해결할 수 있다.  
왜냐하면 순차적으로 반복하면 되기 때문이다. 따라서 for each 문을 이용한 풀이도 구현해보았다.

```java
class Main {
    public static String solution(String str)
    {
        String answer = "";

        for (char x : str.toCharArray())
        {
            if(Character.isLowerCase(x))
            {
                answer+=Character.toUpperCase(x);
            }
            else
            {
                answer+=Character.toLowerCase(x);
            }
        }
        return answer;
    }
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        String str = in.next();

        System.out.print(solution(str));
        return ;
    }
}


```

## 코드 전문

```java
class Main {
    public static String solution(String str)
    {
        String answer = "";

        for (int i =0; i < str.length(); i++)
        {
            char c = str.charAt(i);
            if(Character.isUpperCase(c))
            {
                answer+=Character.toLowerCase(c);
            }
            else
            {
                answer+=Character.toUpperCase(c);
            }
        }
        return answer;
    }
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        String str = in.next();

        System.out.print(solution(str));
        return ;
    }
}

```

---

## 얻어 간 것

강의에서는 다른 풀이도 제공했다.(아스키 코드 이용)

대문자와 소문자의 아스키 넘버는 각 각 대문자 65 ~ 90, 소문자 97 ~ 122이다.  
아스키 넘버를 살펴보면 32씩 차이가 남을 알 수 있다.  
이를 이용하여 아래와 같은 성질을 추출할 수 있다.

- 대문자 -> 소문자

  - 대문자 + 32 = 소문자

- 소문자 -> 대문자

  - 소문자 - 32 = 대문자

위에서 추출한 성질을 이용하여 코드를 작성한 것은 아래와 같다.

```java
 for (char x : str.toCharArray())
        {
           if(x>=65 && x<=90)
           {
               answer +=(x+32);
           }
           else
           {
               answer +=(x-32);
           }
        }
        return answer;
```

![대소문자변환 2](..\0-img\대소문자변환2.png)  
다만 여기서 하나의 문제가 발생하는데 숫자로 누적 되는 것이다.  
이를 해결하기 위해 문자로 바꿔주는 과정을 넣어준다.

```java
        for (char x : str.toCharArray())
        {
           if(x>=65 && x<=90)
           {
               answer +=(char)(x+32);
           }
           else
           {
               answer +=(char)(x-32);
           }
        }
        return answer;
```

## 더 찾아본 것

속도 차이 비교 아스키 한국어의 경우  
![대소문자변환 1](..\0-img\대소문자변환1.png)  
![대소문자변환 3](..\0-img\대소문자변환3.png)

[위 : for each문, 중간 : for문 아래 : 아스키코드 사용 코드]

문자찾기 1에서와 마찬가지로 for문이 가장 빨랐다.

알파벳 아스키코드의 성질을 알아보았으니 한국어 관련 코드도 있는지 궁금증이 생겨서 찾아보게 되었다.

| 구분               | 공식                                                   |
| ------------------ | ------------------------------------------------------ |
| 한글 유니코드 계산 | 한글 유니코드 = 초성 _ 588 + 중성 _ 28 + 종성 + 0xAC00 |
| 초성 계산          | 초성 = (한글 코드 값 - 0xAC00) / 588                   |
| 중성 계산          | 중성 = ((한글 코드 값 - 0xAC00) % 588) / 28`           |
| 종성 계산          | 종성 = (한글 코드 값 - 0xAC00) % 28                    |
