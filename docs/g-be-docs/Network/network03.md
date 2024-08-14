---
siderbar_position: 1
---

# 2.2 Network

## 컴퓨터네트워크란?

- 서론

  - [문제](#문제)
  - [처음 문제를 마주했을 때 생각](#처음-문제를-마주했을-때-생각)

- 본론

  - [문제 설명](#문제-설명)
  - [코드 전문](#코드-전문)

- 결론
  - [얻어 간 것](#얻어-간-것).
  - [더 찾아본 것](#더-찾아본-것).

---

## 문제

문자열 하나와, 문자열에서 특정 문자를 입력

문자열에서 특정문자가 몇개가 존재하는지 출력

(대소문자 구분하지 않음, 문자열과 문자는 영어로...)

## 처음 문제를 마주했을 때 생각

1. 입력으로는 문자열과 특정 문자(찾고 싶은 문자)

2. 출력으로는 특정문자의 존재 수

3. 대소문자를 구분하지 않기 때문에 입력받은 문자열에 대해서  
   모두 올림을 하거나 내림을 하는 과정이 필요할 것 이다.

---

## 문제 설명

### Step1 문자 입력받기

먼저 문자를 입력받는 것을 생각해야 한다.
입력 받는 것은 문자열과 특정문자하나이다.  
그렇다면 입력은 Scanner로 문자열과 문자 하나로 받으면 된다.

```java
class Main
{
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

그런데 여기서 문제점이 발생한다.

![문자찾기 1]

### Step1-1 문제 해결

문제를 해결하기 위해서는 next를 살펴봐야 한다.  
next를 구글링을 해보면 입력한 값을 "문자열"로 받는다는 것을 알 수 있다.  
문제가 되는 부분인 char c = in.next()를 부분에 집중을 해보면  
문자열을 문자형으로 받으려고 하기 때문에 문제가 발생한 것으로 알 수 있다.  
따라서 두 번째로 입력한 문자열에서 문자 하나만 받으면 된다. (어차피 문자하나만 입력되므로 charAt(0)를 사용하면 해결된다.)

```java
class Main {
    public static int solution(String str, char c)
    {
    }

    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        String str = in.next();
        char c = in.next().charAt(0);

        System.out.print(solution(str, c));
        return ;
    }
}


```

### Step2 대소문자 구분 해결하기

대소문자 구분을 하지 않기 때문에 입력 받은 값을 대문자 or 소문자로 모두 처리해버리면 위의 조건을 만족하게 된다.
나의 경우에는 대문자로 처리하였다.

```java
class Main
  {
    public static int solution(String str, char c)
    {
        int answer = 0;

        str = str.toUpperCase();
        c = Character.toUpperCase(c);

        /*잘나오는지 출력해서 확인해보자.
        /System.out.println(str);
        System.out.println(c);
        */


    }
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        String str = in.next();
        char c = in.next().charAt(0);


        System.out.print(solution(str, c));
        return ;
    }
}

```

### step3 특정문자 존재 여부

나의 경우에는 바로 'for문에서 특정문자(c) == 문자열(str)'를 생각했다.

```java
class Main {
    public static int solution(String str, char c)
        {
            int answer = 0;

            str = str.toUpperCase();
            c = Character.toUpperCase(c);

            for (int i =0; i < str.length(); i++)
            {
                if(str.charAt(i) == c )
                {
                    answer++;
                }
            }
            return answer;

        }
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        String str = in.next();
        char c = in.next().charAt(0);


        System.out.print(solution(str, c));
        return ;
    }
}

```

## 코드 전문

```java
class Main {
    public static int solution(String str, char c)
    {
            int answer = 0;

            str = str.toUpperCase();
            c = Character.toUpperCase(c);

            for (int i =0; i < str.length(); i++)
            {
                if(str.charAt(i) == c )
                {
                    answer++;
                }
            }
            return answer;
        }
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        String str = in.next();
        char c = in.next().charAt(0);

        System.out.print(solution(str, c));
        return ;
    }
}

```

---

## 얻어 간 것

next()는 입력받은 값을 문자가 아닌 문자'열'로 저장한다는 것을 알게 되었다.

강의에서는 다른 풀이도 제공했다.(for each 문)

```java
           for(char x : str.toCharArray())
           {
                   if(x == c)
                   answer++;
            }
```

for each문이 한 단어씩 순차적으로 반복할 때 괜찮은 방법이라는 것을 기억할 수 있었다.  
현재 나의 수준에서 실전에서 이 문제를 만난다면

1. 쉽게 떠올릴 수 있고(사용할 수 있고)
2. 반복에 제약이 없는 (반복 횟수를 명시적으로 주기 어렵다)  
   -> for문을 쓸 것 같다.

## 더 찾아본 것

for문과 for each문에 대한 비교

- 성능 측면  
  for : charAt()를 사용하여 직접 문자에 접근하기 때문에 추가적인 메모리 할당이 X  
  for each : toCharArry() 호출로 인해 새로운 배열을 생성하므로 추가적인 메모리가 할당된다.

  ![문자찾기 2]
  [위 : for문, 아래: for each문]  
  채점 사이트에서 두 문제의 속도를 비교해보니 for문이 약간 더 빨랐다.

- 가독성 측면  
  for each 의 경우가 조금 더 간결하고 가독성이 좋은 경우가 많다.

- for문과 each for문을(확장된 for문) 정리하여 표로 정리해보았다.
  | 기능 | for 문 | for-each 문 (확장된 for 문) |
  |-----------------|-------------------------------|-----------------------------------|
  | **유연성** | 높음 (복잡한 조건 및 증감 가능) | 낮음 (단순 순회에 최적화) |
  | **인덱스 접근** | 가능 | 불가능 |
  | **가독성** | 낮을 수 있음 | 높음 |
  | **오류 감소** | 인덱스 오류 가능성 있음 | 인덱스 없이 순회하여 오류 감소 |
  | **제어** | 복잡한 제어 가능 (역순 등) | 제한적 제어 (단순 순회) |
  | **성능** | 직접 제어에 따라 최적화 가능 | 약간의 성능 오버헤드가 있을 수 있음 |
  | **수정 제한** | 가능 | 순회 중 컬렉션 수정 시 오류 가능 |

위의 근거로 for문을 먼저 사용하겠지만  
for each문을 사용할 수 있는 상황이라면 for each문도 사용해볼 수 있는 옵션 정도로 생각할 것 같다.

- 컴퓨터 네트워크는 무엇인가요?
  일상적으로 사용하는 노트북, 스마트폰은 유무선으로 연결되어 정보를 주고 받는다.
- 컴퓨터 네트워크에서 데이터를 전송하는 방식에 대해 설명해주세요.
- 프로토콜에 대해서 설명해주세요.
- TCP/IP에 대해서 설명해주세요.
- OSI 7 Layer에 대해서 설명해주세요.
- OSI 7 Layer, TCP/IP 처럼 프로토콜을 계층화하는 이유가 뭘까요?
- 컴퓨터 네트워크에서 캡슐화와 비캡슐화에 대해서 설명해주세요.
- NIC와 리피터에 대해서 설명해주세요.
- 브리지에 대해서 설명해주세요.
- L2 스위치에 대해서 설명해주세요.
- 라우터에 대해서 설명해주세요.
- L3 스위치에 대해서 설명해주세요.
- L7 스위치에 대해서 설명해주세요.
- LAN과 WAN에 대해서 설명해주세요.
