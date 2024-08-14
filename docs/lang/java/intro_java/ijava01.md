---
siderbar_position: 1
---

# 1. Hello World!

## 목차

- 서론

  - [이론](#이론)
  - [실습](#실습)

- 정리

  - [배운것 정리](#배운것-)

- 결론
  - [얻어 간 것](#얻어-간-것).
  - [더 찾아본 것](#더-찾아본-것).

---

## 이론

    1.

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

## 더 찾아본 것
