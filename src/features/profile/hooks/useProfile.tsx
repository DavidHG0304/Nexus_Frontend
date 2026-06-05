import {
    useEffect,
    useState
} from "react";

import {

    getProfile,

    updateProfile

} from "../services/profileService";

import type {
    ProfileResponse
} from "../types/profile.types";

import {
    successToast,
    errorToast
} from "../../../shared/utils/toast";

export function useProfile() {

    const [profile, setProfile] =
        useState<ProfileResponse | null>(
            null
        );

    const [loading, setLoading] =
        useState(true);

    const loadProfile =
        async () => {

            try {

                const data =
                    await getProfile();

                setProfile(data);

            } finally {

                setLoading(false);

            }

        };

    const saveProfile =
        async () => {

            if (!profile)
                return;

            if (!profile.name.trim()) {

                errorToast(
                    "Name is required"
                );

                return;

            }

            if (!profile.phone.trim()) {

                errorToast(
                    "Phone is required"
                );

                return;

            }

            if (
                !/^\d{10}$/.test(
                    profile.phone
                )
            ) {

                errorToast(
                    "Phone must contain 10 digits"
                );

                return;

            }

            if (!profile.address.trim()) {

                errorToast(
                    "Address is required"
                );

                return;

            }

            try {

                const response =
                    await updateProfile({

                        name:
                            profile.name,

                        phone:
                            profile.phone,

                        address:
                            profile.address

                    });

                setProfile(
                    response.client
                );

                successToast(
                    "Profile updated"
                );

            } catch {

                errorToast(
                    "Failed to update profile"
                );

            }

        };

    useEffect(() => {

        loadProfile();

    }, []);

    return {

        profile,

        setProfile,

        loading,

        saveProfile

    };

}