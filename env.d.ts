namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: string,
        SECRET: string,
        NEXTAUTH_URL: string,

        //GitHub oAuth
        GITHUB_ID: string,
        GITHUB_SECRET: string,
        
        //Email (magic link)
        SMTP_HOST: string,
        SMTP_PORT: string,
        SMTP_USER: string,
        SMTP_PASSWORD: string,
        SMTP_FROM: string,
    }
  }