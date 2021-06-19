import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client("1034408942960-0gs3i9q34f9fmg7j04mp1gghkpjlc4uc.apps.googleusercontent.com")
// export const verify = async () => {
//     const ticket = await client.verifyIdToken({
//         idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE5ZmUyYTdiNjc5NTIzOTYwNmNhMGE3NTA3OTRhN2JkOWZkOTU5NjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTAzNDQwODk0Mjk2MC0wZ3MzaTlxMzRmOWZtZzdqMDRtcDFnZ2hrcGpsYzR1Yy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwMzQ0MDg5NDI5NjAtMGdzM2k5cTM0ZjlmbWc3ajA0bXAxZ2doa3BqbGM0dWMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDc2MjY4NzUwNzg3ODkzNDQyNzciLCJlbWFpbCI6IndvbGV3bmlja2lAeWFob28uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJWOWZWT2E0Tm9ReEIzdGJJdldKOU5BIiwibmFtZSI6IldpbGwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2ctZ2lEazk5eTVrZlNJYlJNY2xUc09sNkZBUUtvMF9LdDJUZHZPNXc9czk2LWMiLCJnaXZlbl9uYW1lIjoiV2lsbCIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjI0MTA5MjM3LCJleHAiOjE2MjQxMTI4MzcsImp0aSI6IjE0MDFlOTJlM2YyN2U3Y2Y1YTRiNGZjZjcyMzg1OGJjYmM3ODIwMDUifQ.hcn8Qi_XF12Y_jXDCoOZyq0wS0HR9MwcjdFMsEFk4mn7AlAFStMwMc_eN5KpYIUx0Ve5rsBfNepQrZK2jvZpsOxpND9nb1y2fABhMZcHMvLr6aDVqu3RCKFTEXqNSlDcZnhwrZzLARPlBuCaVyYz6Z_1KlANamkRLZgFcdznASYJyCepM9UHFolTMflmAXvvt6D_RpPPiusk1X16IFI6sEmUEns03b8kA1sYdK5xZeryql87EuqVVEfrHrF_AD8J-JSl7IQZxKGOFBGZYc7VusTwf_Bav1KsDLGz4C7BS7_ypIxzgYVMOXqx13woC0tYF2Hz0GiuLkq1OJfSVegp4A",
//         audience: "1034408942960-0gs3i9q34f9fmg7j04mp1gghkpjlc4uc.apps.googleusercontent.com"
//     })
//     const payload = ticket.getPayload()
//     const userId = payload?.sub
//     const name = payload?.name
//     const list = [name, userId]
//     return list 
// }


export const verify = async (token: string) => {
    const ticket = await client.verifyIdToken({
        idToken: token, 
        audience: "1034408942960-0gs3i9q34f9fmg7j04mp1gghkpjlc4uc.apps.googleusercontent.com"
    })
    const payload = ticket.getPayload()
    const userId = payload?.sub
    const name = payload?.name
    const list = [name, userId]
    return list 
}