import Image from "next/image";

const companies = [
    { name: 'Google', logo: '/companies/Google.svg' },
    { name: 'Microsoft', logo: '/companies/Microsoft.svg' },
    { name: 'GitHub', logo: '/companies/GitHub.svg' },
    { name: 'Uber', logo: '/companies/Uber.svg' },
    { name: 'Notion', logo: '/companies/Notion.svg' },
  ];
export function Partners() {
    
    return (
        <div className="w-full flex justify-between items-center  border-b-2 border-x-2 px-8 min-h-16  ">
 <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white mx-auto p-12">
                {companies.map((company) => (
                  <li key={company.name}>
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={112} // 28*4
                      height={32} // 8*4
                      className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                    />
                  </li>
                ))}
              </ul>
        </div>
    )
}