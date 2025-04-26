import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialGuest = [{
    id: '',
    name: '',
    answer: 'pending',
    table: '',
    gender: '',
    ageGroup: '',
    pagamento: '',
    rg: '',
    cpf: ''
}]
const initialInvitation = {
    id: '',
    name: '',
    ddi: '55',
    phone: '',
    group: '',
    observations: '',
    guests: initialGuest
}
const startInvitations = [
    {
        id: uuidv4(),
        name: "Familia do Fulano",
        ddi: "55",
        phone: "(11) 999999999",
        group: "Familia do Noivo",
        observations: "Sei la",
        guests: [
            {
                id: uuidv4(),
                name: "Fulano",
                answer: "confirmed",
                table: "Mesa A",
                gender: "Masculino",
                ageGroup: "Adulto",
                pagamento: "Inteira",
                rg: "111111111",
                cpf: "22222222222"
            },
            {
                id: uuidv4(),
                name: "Ciclana",
                answer: "confirmed",
                table: "Mesa A",
                gender: "Feminino",
                ageGroup: "Adulto",
                pagamento: "Inteira",
                rg: "111111111",
                cpf: "22222222222"
            },
        ]
    },
    {
        id: uuidv4(),
        name: "Amigos do Fulano",
        ddi: "55",
        phone: "(11) 999999998",
        group: "Amigos do Noivo",
        observations: "só os parças",
        guests: [
            {
                id: uuidv4(),
                name: "Beltrano",
                answer: "confirmed",
                table: "Mesa A",
                gender: "Masculino",
                ageGroup: "Adulto",
                pagamento: "Inteira",
                rg: "111111111",
                cpf: "22222222222"
            },
            {
                id: uuidv4(),
                name: "Fudêncio",
                answer: "confirmed",
                table: "Mesa A",
                gender: "Masculino",
                ageGroup: "Adulto",
                pagamento: "Inteira",
                rg: "111111111",
                cpf: "22222222222"
            },
        ]
    },
    {
        id: uuidv4(),
        name: "As Três Espiãs Demais",
        ddi: "55",
        phone: "(11) 999999997",
        group: "Amigos da Noiva",
        observations: "Sei la",
        guests: [
            {
                id: uuidv4(),
                name: "Sam",
                answer: "confirmed",
                table: "Mesa A",
                gender: "Feminino",
                ageGroup: "Adulto",
                pagamento: "Inteira",
                rg: "111111111",
                cpf: "22222222222"
            },
            {
                id: uuidv4(),
                name: "Clover",
                answer: "confirmed",
                table: "Mesa A",
                gender: "Feminino",
                ageGroup: "Adulto",
                pagamento: "Inteira",
                rg: "111111111",
                cpf: "22222222222"
            },
            {
                id: uuidv4(),
                name: "Alex",
                answer: "confirmed",
                table: "Mesa A",
                gender: "Feminino",
                ageGroup: "Adulto",
                pagamento: "Inteira",
                rg: "111111111",
                cpf: "22222222222"
            },
        ]
    }
]

export const ConvidadoContext = createContext({
    invitations: initialInvitation,
    invitation: initialInvitation,
    errors: {},
    addInvitation: () => null,
    setInviteId: () => null,
    setInviteName: () => null,
    setDdi: () => null,
    setPhone: () => null,
    setGroup: () => null,
    setObservations: () => null,
    setGuestId: () => null,
    setGuestName: () => null,
    setRsvp: () => null,
    setTable: () => null,
    setGender: () => null,
    setAgeGroup: () => null,
    setPaymentType: () => null,
    setRg: () => null,
    setCpf: () => null
})

export const useConvidadoContext = () => {
    return useContext(ConvidadoContext);
}

export const ConvidadoProvider = ({children}) => {
    const [invitations, setInvitations] = useState(startInvitations);
    const [invitation, setInvitation] = useState(initialInvitation);
    // const [inviteId, setInviteId] = useState('');
    // const [inviteName, setInviteName] = useState('');
    // const [ddi, setDdi] = useState('55');
    // const [phone, setPhone] = useState('');
    // const [group, setGroup] = useState('');
    // const [observations, setObservations] = useState('');
    // const [guestId, setGuestId] = useState('');
    // const [guestName, setGuestName] = useState('');
    // const [rsvp, setRsvp] = useState('pending');
    // const [table, setTable] = useState('');
    // const [gender, setGender] = useState('');
    // const [ageGroup, setAgeGroup] = useState('');
    // const [paymentType, setPaymentType] = useState('');
    // const [rg, setRg] = useState('');
    // const [cpf, setCpf] = useState('');
    // const [guestList, setGuestList] = useState([initialGuest]);

    const addNewInvitation = (invitation) => {
        setInvitations(previousState => [
            ...previousState,
            invitation
        ])
    }

    const removeInvitation = (event, inviteId) => {
        event.stopPropagation()
        let newInvitationsList = invitations.filter(invite => invite.id !== inviteId)
        setInvitations([...newInvitationsList])
    }

    const updateInvitation = (updatedInvitation) => {
        var inviteIndex = invitations.findIndex(invitation => invitation.id === updatedInvitation.id)
        invitations[inviteIndex] = updatedInvitation
    }

    const addGuestToInvitation = () => {

    }

    const changeGuestAnswer = () => {

    }

    const context = {
        invitation,
        invitations,
        setInvitations,
        addNewInvitation,
        removeInvitation,
        updateInvitation,
        addGuestToInvitation,
        changeGuestAnswer,
    }

    return (
        <ConvidadoContext.Provider value={context}>
            {children}
        </ConvidadoContext.Provider>
    );
}








// const setInvitationId = (inviteId) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             inviteId
    //         }
    //     })
    // }
    // const setInvitationName = (inviteName) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             inviteName
    //         }
    //     })
    // }
    // const setDdi = (ddi) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             ddi
    //         }
    //     })
    // }
    // const setPhone = (phone) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             phone
    //         }
    //     })
    // }
    // const setGroup = (group) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             group
    //         }
    //     })
    // }
    // const setObservations = (observations) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             observations
    //         }
    //     })
    // }
    // //TODO ajeitar campos do guest
    // const setGuestId = (guestId) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             guestId
    //         }
    //     })
    // }
    // const setGuestName = (guestName) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             guestName
    //         }
    //     })
    // }
    // const setRsvp = (rsvp) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             rsvp
    //         }
    //     })
    // }
    // const setTable = (table) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             table
    //         }
    //     })
    // }
    // const setGender = (gender) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             gender
    //         }
    //     })
    // }
    // const setAgeGroup = (ageGroup) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             ageGroup
    //         }
    //     })
    // }
    // const setPaymentType = (paymentType) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             paymentType
    //         }
    //     })
    // }
    // const setRg = (rg) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             rg
    //         }
    //     })
    // }
    // const setCpf = (cpf) => {
    //     setInvitations(previousState => {
    //         return {
    //             ...previousState,
    //             cpf
    //         }
    //     })
    // }