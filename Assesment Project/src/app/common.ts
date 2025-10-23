import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, filter, forkJoin, map, Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

interface Primary {
  primary_skills: string;
}

interface Secondary {
  primary_skills: string
  secondary_skills: string;
}

@Injectable({
  providedIn: 'root',
})
export class Common {
  candidateData: any = [
  {
    id: 1,
    name: "Aarav Mehta",
    primary_skills: "JavaScript",
    secondary_skills: "React",
    experience: 4,
    status: "Interview Scheduled",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai"
  },
  {
    id: 2,
    name: "Sophia Kim",
    primary_skills: "Python",
    secondary_skills: "TensorFlow",
    experience: 5,
    status: "Shortlisted",
    country: "South Korea",
    state: "Seoul",
    city: "Gangnam"
  },
  {
    id: 3,
    name: "Liam Brown",
    primary_skills: "Java",
    secondary_skills: "Spring Boot",
    experience: 6,
    status: "Offered",
    country: "USA",
    state: "California",
    city: "San Francisco"
  },
  {
    id: 4,
    name: "Emma Johnson",
    primary_skills: "UI/UX",
    secondary_skills: "Figma",
    experience: 3,
    status: "Rejected",
    country: "Canada",
    state: "Ontario",
    city: "Toronto"
  },
  {
    id: 5,
    name: "Rajesh Patel",
    primary_skills: "DevOps",
    secondary_skills: "AWS",
    experience: 7,
    status: "Offered",
    country: "India",
    state: "Gujarat",
    city: "Ahmedabad"
  },
  {
    id: 6,
    name: "Olivia Garcia",
    primary_skills: "Project Management",
    secondary_skills: "Agile",
    experience: 8,
    status: "Shortlisted",
    country: "Spain",
    state: "Madrid",
    city: "Madrid"
  },
  {
    id: 7,
    name: "Noah Williams",
    primary_skills: "C#",
    secondary_skills: ".NET",
    experience: 5,
    status: "Interview Scheduled",
    country: "UK",
    state: "England",
    city: "London"
  },
  {
    id: 8,
    name: "Isabella Rossi",
    primary_skills: "Python",
    secondary_skills: "Machine Learning",
    experience: 4,
    status: "Applied",
    country: "Italy",
    state: "Lombardy",
    city: "Milan"
  },
  {
    id: 9,
    name: "Ethan Nguyen",
    primary_skills: "JavaScript",
    secondary_skills: "Node.js",
    experience: 3,
    status: "Shortlisted",
    country: "Vietnam",
    state: "Hanoi",
    city: "Hanoi"
  },
  {
    id: 10,
    name: "Ava Shah",
    primary_skills: "React Native",
    secondary_skills: "Expo",
    experience: 2,
    status: "Interview Scheduled",
    country: "India",
    state: "Karnataka",
    city: "Bengaluru"
  },
  {
    id: 11,
    name: "Benjamin Carter",
    primary_skills: "Go",
    secondary_skills: "Microservices",
    experience: 6,
    status: "Offered",
    country: "USA",
    state: "Texas",
    city: "Austin"
  },
  {
    id: 12,
    name: "Mia Lee",
    primary_skills: "QA",
    secondary_skills: "Selenium",
    experience: 4,
    status: "Applied",
    country: "Singapore",
    state: "Central",
    city: "Singapore"
  },
  {
    id: 13,
    name: "Lucas Silva",
    primary_skills: "Java",
    secondary_skills: "Android",
    experience: 3,
    status: "Rejected",
    country: "Brazil",
    state: "São Paulo",
    city: "São Paulo"
  },
  {
    id: 14,
    name: "Charlotte Davis",
    primary_skills: "UI Design",
    secondary_skills: "Illustrator",
    experience: 5,
    status: "Shortlisted",
    country: "Australia",
    state: "Victoria",
    city: "Melbourne"
  },
  {
    id: 15,
    name: "Henry Zhang",
    primary_skills: "Full Stack",
    secondary_skills: "React",
    experience: 6,
    status: "Offered",
    country: "China",
    state: "Guangdong",
    city: "Shenzhen"
  },
  {
    id: 16,
    name: "Emily White",
    primary_skills: "Python",
    secondary_skills: "AI",
    experience: 7,
    status: "Interview Scheduled",
    country: "USA",
    state: "New York",
    city: "New York City"
  },
  {
    id: 17,
    name: "Arjun Reddy",
    primary_skills: "Cloud Computing",
    secondary_skills: "Azure",
    experience: 8,
    status: "Offered",
    country: "India",
    state: "Telangana",
    city: "Hyderabad"
  },
  {
    id: 18,
    name: "Zoe Martinez",
    primary_skills: "Salesforce",
    secondary_skills: "Apex",
    experience: 5,
    status: "Shortlisted",
    country: "Mexico",
    state: "Mexico City",
    city: "Mexico City"
  },
  {
    id: 19,
    name: "Daniel Kim",
    primary_skills: "Cybersecurity",
    secondary_skills: "Networking",
    experience: 9,
    status: "Applied",
    country: "South Korea",
    state: "Busan",
    city: "Busan"
  },
  {
    id: 20,
    name: "Chloe Wilson",
    primary_skills: "Content Writing",
    secondary_skills: "SEO",
    experience: 4,
    status: "Interview Scheduled",
    country: "UK",
    state: "England",
    city: "Manchester"
  },
  {
    id: 21,
    name: "Adam Lewis",
    primary_skills: "Java",
    secondary_skills: "Hibernate",
    experience: 5,
    status: "Shortlisted",
    country: "USA",
    state: "Florida",
    city: "Miami"
  },
  {
    id: 22,
    name: "Priya Nair",
    primary_skills: "Data Analysis",
    secondary_skills: "Power BI",
    experience: 6,
    status: "Offered",
    country: "India",
    state: "Kerala",
    city: "Kochi"
  },
  {
    id: 23,
    name: "Mark Evans",
    primary_skills: "PHP",
    secondary_skills: "Laravel",
    experience: 4,
    status: "Rejected",
    country: "USA",
    state: "Illinois",
    city: "Chicago"
  },
  {
    id: 24,
    name: "Sara Ali",
    primary_skills: "Graphic Design",
    secondary_skills: "Photoshop",
    experience: 3,
    status: "Applied",
    country: "UAE",
    state: "Dubai",
    city: "Dubai"
  },
  {
    id: 25,
    name: "Oliver Wright",
    primary_skills: "C++",
    secondary_skills: "Embedded Systems",
    experience: 7,
    status: "Offered",
    country: "Germany",
    state: "Bavaria",
    city: "Munich"
  },
  {
    id: 26,
    name: "Ananya Sharma",
    primary_skills: "Python",
    secondary_skills: "Flask",
    experience: 2,
    status: "Shortlisted",
    country: "India",
    state: "Delhi",
    city: "New Delhi"
  },
  {
    id: 27,
    name: "Hiro Tanaka",
    primary_skills: "AI",
    secondary_skills: "NLP",
    experience: 5,
    status: "Interview Scheduled",
    country: "Japan",
    state: "Tokyo",
    city: "Tokyo"
  },
  {
    id: 28,
    name: "Sophia Brown",
    primary_skills: "Marketing",
    secondary_skills: "Social Media",
    experience: 4,
    status: "Applied",
    country: "USA",
    state: "Washington",
    city: "Seattle"
  },
  {
    id: 29,
    name: "Carlos Gomez",
    primary_skills: "Python",
    secondary_skills: "Django",
    experience: 3,
    status: "Shortlisted",
    country: "Mexico",
    state: "Jalisco",
    city: "Guadalajara"
  },
  {
    id: 30,
    name: "Nina Patel",
    primary_skills: "JavaScript",
    secondary_skills: "Angular",
    experience: 5,
    status: "Offered",
    country: "India",
    state: "Maharashtra",
    city: "Pune"
  },
  {
    id: 31,
    name: "Jack Robinson",
    primary_skills: "Ruby",
    secondary_skills: "Rails",
    experience: 6,
    status: "Offered",
    country: "USA",
    state: "New York",
    city: "Brooklyn"
  },
  {
    id: 32,
    name: "Aisha Khan",
    primary_skills: "HR",
    secondary_skills: "Recruitment",
    experience: 8,
    status: "Shortlisted",
    country: "India",
    state: "Delhi",
    city: "New Delhi"
  },
  {
    id: 33,
    name: "William Scott",
    primary_skills: "DevOps",
    secondary_skills: "Docker",
    experience: 5,
    status: "Interview Scheduled",
    country: "UK",
    state: "England",
    city: "Bristol"
  },
  {
    id: 34,
    name: "Maya Singh",
    primary_skills: "Cloud",
    secondary_skills: "AWS",
    experience: 9,
    status: "Offered",
    country: "India",
    state: "Punjab",
    city: "Chandigarh"
  },
  {
    id: 35,
    name: "Lucas Torres",
    primary_skills: "Networking",
    secondary_skills: "Cisco",
    experience: 7,
    status: "Applied",
    country: "Brazil",
    state: "Rio de Janeiro",
    city: "Rio de Janeiro"
  },
  {
    id: 36,
    name: "Emma Clark",
    primary_skills: "UI/UX",
    secondary_skills: "Prototyping",
    experience: 3,
    status: "Shortlisted",
    country: "Canada",
    state: "Quebec",
    city: "Montreal"
  },
  {
    id: 37,
    name: "Mohammed Ali",
    primary_skills: "Backend",
    secondary_skills: "Node.js",
    experience: 6,
    status: "Interview Scheduled",
    country: "UAE",
    state: "Abu Dhabi",
    city: "Abu Dhabi"
  },
  {
    id: 38,
    name: "Isabella Chen",
    primary_skills: "Data Science",
    secondary_skills: "Pandas",
    experience: 5,
    status: "Offered",
    country: "China",
    state: "Shanghai",
    city: "Shanghai"
  },
  {
    id: 39,
    name: "Ethan Walker",
    primary_skills: "JavaScript",
    secondary_skills: "Vue.js",
    experience: 4,
    status: "Rejected",
    country: "USA",
    state: "Oregon",
    city: "Portland"
  },
  {
    id: 40,
    name: "Sophia Thomas",
    primary_skills: "Marketing",
    secondary_skills: "Email Campaigns",
    experience: 3,
    status: "Shortlisted",
    country: "Australia",
    state: "New South Wales",
    city: "Sydney"
  },
  {
    id: 41,
    name: "Arnav Desai",
    primary_skills: "Frontend",
    secondary_skills: "React",
    experience: 2,
    status: "Applied",
    country: "India",
    state: "Maharashtra",
    city: "Nashik"
  },
  {
    id: 42,
    name: "Grace Miller",
    primary_skills: "Data Engineering",
    secondary_skills: "Airflow",
    experience: 6,
    status: "Offered",
    country: "USA",
    state: "Colorado",
    city: "Denver"
  },
  {
    id: 43,
    name: "Leo Rossi",
    primary_skills: "DevOps",
    secondary_skills: "CI/CD",
    experience: 5,
    status: "Interview Scheduled",
    country: "Italy",
    state: "Lazio",
    city: "Rome"
  },
  {
    id: 44,
    name: "Saanvi Kapoor",
    primary_skills: "Testing",
    secondary_skills: "Cypress",
    experience: 4,
    status: "Shortlisted",
    country: "India",
    state: "Madhya Pradesh",
    city: "Indore"
  },
  {
    id: 45,
    name: "David Green",
    primary_skills: "Go",
    secondary_skills: "API Development",
    experience: 5,
    status: "Offered",
    country: "USA",
    state: "Utah",
    city: "Salt Lake City"
  },
  {
    id: 46,
    name: "Elena Petrova",
    primary_skills: "Data Analysis",
    secondary_skills: "Excel",
    experience: 7,
    status: "Rejected",
    country: "Russia",
    state: "Moscow",
    city: "Moscow"
  },
  {
    id: 47,
    name: "Tariq Hussain",
    primary_skills: "AI",
    secondary_skills: "Deep Learning",
    experience: 8,
    status: "Shortlisted",
    country: "Pakistan",
    state: "Sindh",
    city: "Karachi"
  },
  {
    id: 48,
    name: "Hannah Johnson",
    primary_skills: "QA",
    secondary_skills: "Automation",
    experience: 3,
    status: "Interview Scheduled",
    country: "UK",
    state: "Scotland",
    city: "Glasgow"
  },
  {
    id: 49,
    name: "Lucas Mendes",
    primary_skills: "Python",
    secondary_skills: "Pandas",
    experience: 4,
    status: "Applied",
    country: "Brazil",
    state: "Minas Gerais",
    city: "Belo Horizonte"
  },
  {
    id: 50,
    name: "Nora Wilson",
    primary_skills: "Cloud",
    secondary_skills: "Google Cloud",
    experience: 6,
    status: "Offered",
    country: "Canada",
    state: "British Columbia",
    city: "Vancouver"
  }
  ];
 
  constructor( private http: HttpClient) {}

  getuserdata(value: any, filter1: any, filter2: any, country: any, state: any, city: any): Observable<any> {
    return of(this.candidateData).pipe(
      map((data) =>
        data.filter((candidate: { name: any, secondary_skills: any, primary_skills: any, country: any, state: any, city: any }) =>
          ((candidate.name
            .toLowerCase()
            .includes(
              value.toLowerCase()) ||
                (candidate.secondary_skills.toLowerCase().includes(value.toLowerCase())) || (candidate.primary_skills.toLowerCase().includes(value.toLowerCase()))
            )) &&
          (filter1 ? candidate.primary_skills == filter1 : true) &&
          (filter2 ? candidate.secondary_skills == filter2 : true) &&
          (country ? candidate.country == country : true) &&
          (state ? candidate.state == state : true) &&
          (city ? candidate.city == city : true)
        )
      )
    );
  }

  getprimaryfilterdata(): Observable<any> {
    return of(this.candidateData).pipe(
      map((items: Primary[]) => {
      const uniqueNames = [...new Set(items.map(item => item.primary_skills))];
      return uniqueNames;
    }))
  }
  getscondaryfilterdata(value: any): Observable<any> {
    return of(this.candidateData).pipe(
      map((items: Secondary[]) =>  {
        const filtered_items = items.filter((candidate: {secondary_skills: any, primary_skills: any }) =>(candidate.primary_skills == value))
        const uniqueNames = [...new Set(filtered_items.map(item => item.secondary_skills))];
        return uniqueNames;
      }
        
    //     {
    //   const uniqueNames = items.filter((value, index, self) =>
    //   index === self.findIndex(item => item.secondary_skills === value.secondary_skills) // Uniqueness based on 'id'
    //   );
    //   return uniqueNames;
    // }
      )
    )
  }
  getCountries() {
    return this.http.get('https://countriesnow.space/api/v0.1/countries/positions', httpOptions);
  }
  getStates(country:any){
    return this.http.post('https://countriesnow.space/api/v0.1/countries/states', {"country" : country}, httpOptions);
  }
  getCity(country:any, state:any){
    return this.http.post('https://countriesnow.space/api/v0.1/countries/state/cities', { "country": country, "state" : state}, httpOptions);
  }
}
