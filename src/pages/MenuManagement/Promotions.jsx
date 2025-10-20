import React from 'react';// Define the colors used in the design
const COLORS = {

    primaryRed: '#E53935',

    surfaceWhite: '#FFFFFF',

    bgLightNeutral: '#F5F7FA',

    textPrimary: '#212121',

    textSecondary: '#616161',

    borderLightGray: '#E0E0E0',

}; const CreatePopAdForm = ({ onClose }) => {

    return (

        <div

            style={{

                position: 'fixed',

                top: 0,

                left: 0,

                right: 0,

                bottom: 0,

                backgroundColor: COLORS.bgLightNeutral, // Matches background color for overlay effect

                zIndex: 1000,

                display: 'flex',

                justifyContent: 'center',

                alignItems: 'center',

            }}

        >

            <div

                style={{

                    backgroundColor: COLORS.surfaceWhite,

                    borderRadius: '12px',

                    width: '80%',

                    maxWidth: '900px',

                    padding: '40px',

                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',

                    position: 'relative',

                }}

            >

                {/* Back Button */}

                <button

                    onClick={onClose}

                    style={{

                        position: 'absolute',

                        top: '20px',

                        left: '20px',

                        backgroundColor: COLORS.surfaceWhite,

                        color: COLORS.primaryRed,

                        padding: '8px 16px',

                        border: `1px solid ${COLORS.primaryRed}`,

                        borderRadius: '8px',

                        cursor: 'pointer',

                        fontSize: '14px',

                        fontWeight: '500',

                    }}

                >

                    Back

                </button>



                {/* Title */}

                <h2

                    style={{

                        fontSize: '28px',

                        fontWeight: 'bold',

                        color: COLORS.textPrimary,

                        marginTop: '60px', /* Push down below the back button */

                        marginBottom: '30px',

                        paddingBottom: '10px',

                    }}

                >

                    CREATE POP AD

                </h2>



                <div

                    style={{

                        display: 'flex',

                        gap: '40px',

                    }}

                >

                    {/* Upload Section */}

                    <div

                        style={{

                            flex: 1,

                        }}

                    >

                        <div

                            style={{

                                border: `2px solid ${COLORS.borderLightGray}`,

                                borderRadius: '8px',

                                padding: '40px 20px',

                                textAlign: 'center',

                                backgroundColor: COLORS.bgLightNeutral,

                                display: 'flex',

                                flexDirection: 'column',

                                alignItems: 'center',

                                justifyContent: 'center',

                                height: '300px',

                                position: 'relative',

                                overflow: 'hidden', /* Helps contain the file input */

                            }}

                        >

                            <span

                                style={{

                                    fontSize: '60px',

                                    color: COLORS.textSecondary,

                                }}

                            >

                                **

                            </span>

                            <p

                                style={{

                                    marginTop: '10px',

                                    color: COLORS.textSecondary,

                                    fontWeight: '500',

                                }}

                            >

                                Upload advertisement picture

                            </p>

                            {/* File input styled to cover the box for click area */}

                            <input

                                type="file"

                                style={{

                                    position: 'absolute',

                                    width: '100%',

                                    height: '100%',

                                    top: 0,

                                    left: 0,

                                    opacity: 0,

                                    cursor: 'pointer',

                                }}

                            />

                        </div>

                    </div>



                    {/* Input Section */}

                    <div

                        style={{

                            flex: 1,

                            display: 'flex',

                            flexDirection: 'column',

                        }}

                    >

                        <label

                            style={{

                                fontSize: '16px',

                                fontWeight: 'bold',

                                color: COLORS.textPrimary,

                                marginTop: '0px', /* No margin at the very top of the section */

                                marginBottom: '8px',

                            }}

                        >

                            Caption

                        </label>

                        <textarea

                            placeholder="Enter Caption (if any)"

                            style={{

                                width: '100%',

                                padding: '12px',

                                border: `1px solid ${COLORS.borderLightGray}`,

                                borderRadius: '8px',

                                resize: 'vertical',

                                minHeight: '120px',

                                fontSize: '14px',

                                boxSizing: 'border-box',

                                backgroundColor: COLORS.bgLightNeutral, /* Match placeholder background */

                            }}

                        ></textarea>



                        <label

                            style={{

                                fontSize: '16px',

                                fontWeight: 'bold',

                                color: COLORS.textPrimary,

                                marginTop: '20px',

                                marginBottom: '8px',

                            }}

                        >

                            Description

                        </label>

                        <textarea

                            placeholder="Enter Description (if any)"

                            style={{

                                width: '100%',

                                padding: '12px',

                                border: `1px solid ${COLORS.borderLightGray}`,

                                borderRadius: '8px',

                                resize: 'vertical',

                                minHeight: '120px',

                                fontSize: '14px',

                                boxSizing: 'border-box',

                                backgroundColor: COLORS.bgLightNeutral, /* Match placeholder background */

                            }}

                        ></textarea>



                        {/* Submit Button */}

                        <button

                            style={{

                                alignSelf: 'flex-end',

                                backgroundColor: COLORS.primaryRed,

                                color: COLORS.surfaceWhite,

                                padding: '10px 24px',

                                border: 'none',

                                borderRadius: '8px',

                                cursor: 'pointer',

                                fontSize: '16px',

                                fontWeight: '500',

                                marginTop: '30px',

                            }}

                        >

                            Submit

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}; export default CreatePopAdForm;