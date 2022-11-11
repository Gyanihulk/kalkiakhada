"use strict";
(() => {
var exports = {};
exports.id = 638;
exports.ids = [638];
exports.modules = {

/***/ 2663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* reexport */ keystone),
  "default": () => (/* binding */ _keystone_api_build)
});

// NAMESPACE OBJECT: ../../schemas/index.ts
var schemas_namespaceObject = {};
__webpack_require__.r(schemas_namespaceObject);
__webpack_require__.d(schemas_namespaceObject, {
  "Asset": () => (Asset),
  "Category": () => (Category),
  "Collection": () => (Collection),
  "Role": () => (Role),
  "Structure": () => (Structure),
  "Tag": () => (Tag),
  "User": () => (User)
});

;// CONCATENATED MODULE: external "dotenv/config"
const config_namespaceObject = require("dotenv/config");
;// CONCATENATED MODULE: external "@keystone-6/core"
const core_namespaceObject = require("@keystone-6/core");
;// CONCATENATED MODULE: external "bcryptjs"
const external_bcryptjs_namespaceObject = require("bcryptjs");
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_namespaceObject);
;// CONCATENATED MODULE: ../../seed-data/data.ts
function timestamp() {
    // sometime in the last 30 days
    const stampy = Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
    return new Date(stampy).toISOString();
}

const seedUser = [
    {
        name: 'saurav',
        email: 'saurav@kalkiakhada.com',
        password: external_bcryptjs_default().hashSync('password', 10)
    },
    {
        name: 'kartik',
        email: 'kartik@kalkiakhada.com',
        password: external_bcryptjs_default().hashSync('password', 10)
    },
    {
        name: 'adamya',
        email: 'adamya@kalkiakhada.com',
        password: external_bcryptjs_default().hashSync('password', 10)
    }, 
];

;// CONCATENATED MODULE: ../../seed-data/index.ts

async function insertSeedData(prisma) {
    console.log(`🌱 Creating Seed Role`);
    const { id: roleId  } = await prisma.role.create({
        data: {
            name: 'seed-role',
            canManageUsers: true,
            canManageRoles: true,
            canSeeOtherUsers: true
        }
    });
    const users = await Promise.all(seedUser.map(async (user)=>{
        console.log(`${user.name}`);
        return prisma.user.create({
            data: {
                ...user,
                roleId
            }
        });
    }));
}

;// CONCATENATED MODULE: ../../mutations/index.ts

// make a fake graphql tagged template literal
const graphql = String.raw;
const extendGraphqlSchema = (0,core_namespaceObject.graphQLSchemaExtension)({
    typeDefs: graphql`
   type AmityTokenResult {
      token: String
      user: String
    }
    type Query {
      userAmityToken: AmityTokenResult
    }
  `,
    resolvers: {
        Mutation: {},
        Query: {}
    }
});

;// CONCATENATED MODULE: external "body-parser"
const external_body_parser_namespaceObject = require("body-parser");
var external_body_parser_default = /*#__PURE__*/__webpack_require__.n(external_body_parser_namespaceObject);
;// CONCATENATED MODULE: ../../express/index.ts

const errorHandler = (err, req, res, next)=>{};
const extendExpressApp = async (app, createContext)=>{
    app.use('/', async (req, res, next)=>{
        // Add context to the req
        req.context = await createContext(req, res);
        next();
    });
    // parse application/x-www-form-urlencoded
    app.use(external_body_parser_default().urlencoded({
        extended: false
    }));
    // parse application/json
    app.use(external_body_parser_default().json());
    //parse the errorhandler
    app.use(errorHandler);
};

;// CONCATENATED MODULE: external "@keystone-6/auth"
const auth_namespaceObject = require("@keystone-6/auth");
;// CONCATENATED MODULE: external "@keystone-6/core/session"
const session_namespaceObject = require("@keystone-6/core/session");
;// CONCATENATED MODULE: external "@keystone-6/core/fields"
const fields_namespaceObject = require("@keystone-6/core/fields");
;// CONCATENATED MODULE: ../../schemas/fields.ts

const permissionFields = {
    canSeeOtherUsers: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can query other users'
    }),
    canManageUsers: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can Edit other users'
    }),
    canManageRoles: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can CRUD roles'
    }),
    canReadListing: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can see Listing'
    }),
    canManageListing: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can manage Listing'
    }),
    canManageAnimal: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can see and manage Animals'
    }),
    canManageArticle: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can see and manage Article'
    }),
    canManageEvent: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can see and manage Event'
    }),
    canManagePage: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can see and manage Page'
    }),
    canManageTrait: (0,fields_namespaceObject.checkbox)({
        defaultValue: false,
        label: 'User can see and manage Trait'
    })
};
const permissionsList = Object.keys(permissionFields);

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
;// CONCATENATED MODULE: ../../lib/mail.ts


const transport = (0,external_nodemailer_namespaceObject.createTransport)({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});
function makeANiceEmail(text) {
    return `
    <div style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello There!</h2>
      <p>${text}</p>
      <p>😘, ColdBlooded</p>
    </div>
  `;
}
async function sendPasswordResetEmail(resetToken, to) {
    // email the user a token
    const info = await transport.sendMail({
        to,
        from: 'test@example.com',
        subject: 'Your password reset token!',
        html: makeANiceEmail(`Your Password Reset Token is here!
      <a href="${process.env.FRONTEND_URL}/reset-password?token=${resetToken}&email=${to}">Click Here to reset</a>
    `)
    });
    if (process.env.MAIL_USER.includes('ethereal.email')) {
        console.log(`💌 Message Sent!  Preview it at ${(0,external_nodemailer_namespaceObject.getTestMessageUrl)(info)}`);
    }
}

;// CONCATENATED MODULE: ../../auth.ts




const sessionConfig = {
    maxAge: 60 * 60 * 24 * 30,
    secret: process.env.COOKIE_SECRET || '-- DEV COOKIE SECRET; CHANGE ME ajlsi434--'
};
const { withAuth  } = (0,auth_namespaceObject.createAuth)({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: [
            'name',
            'email',
            'password'
        ],
        // TODO: Add in initial roles here
        itemData: {
            role: {
                create: {
                    name: 'initial role',
                    ...permissionsList.reduce((result, permission)=>{
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        result[permission] = true;
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                        return result;
                    }, {})
                }
            }
        }
    },
    passwordResetLink: {
        async sendToken (args) {
            // send the email
            await sendPasswordResetEmail(args.token, args.identity);
        }
    },
    sessionData: `id name email role { ${permissionsList.join(' ')} } `
});
const session = (0,session_namespaceObject.statelessSessions)(sessionConfig);


;// CONCATENATED MODULE: external "@keystone-6/fields-document"
const fields_document_namespaceObject = require("@keystone-6/fields-document");
;// CONCATENATED MODULE: ../../access.ts

// At it's simplest, the access control returns a yes or no value depending on the users session
function isSignedIn({ session  }) {
    return !!session;
}
const generatedPermissions = Object.fromEntries(permissionsList.map((permission)=>{
    return [
        permission,
        function({ session  }) {
            var ref;
            return !!((ref = session === null || session === void 0 ? void 0 : session.data.role) === null || ref === void 0 ? void 0 : ref[permission]);
        }, 
    ];
}));
// Permissions check if someone meets a criteria - yes or no.
const permissions = {
    ...generatedPermissions
};
// Rule based function
// Rules can return a boolean - yes or no - or a filter which limits which products they can CRUD.
const rules = {
    canManageUsers ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageUsers({
            session
        })) {
            return true;
        }
        // Otherwise they may only update themselves!
        return {
            id: {
                equals: session === null || session === void 0 ? void 0 : session.itemId
            }
        };
    },
    canManageListing ({ session  }) {
        // console.log(session)
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageListing({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageAnimal ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageAnimal({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageArticle ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageArticle({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageEvent ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageEvent({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageTrait ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageTrait({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManagePage ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManagePage({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageStore ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageStore({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageAsset ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageAsset({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageGroup ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageGroup({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManagePost ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManagePost({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageGlobal ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageGlobal({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageSetting ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageSetting({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageSubscription ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageSubscription({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageCollection ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageCollection({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    },
    canManageOrganization ({ session  }) {
        if (!isSignedIn({
            session
        })) {
            return false;
        }
        if (permissions.canManageOrganization({
            session
        })) {
            return true;
        }
        return {
            author: {
                id: {
                    equals: session === null || session === void 0 ? void 0 : session.itemId
                }
            }
        };
    }
};

;// CONCATENATED MODULE: ../../schemas/UserManagement/User.ts




const User = (0,core_namespaceObject.list)({
    access: {
        operation: {
            create: ()=>true
            ,
            // only people with the permission can delete themselves!
            // You can't delete yourself
            delete: permissions.canManageUsers
        },
        filter: {
            query: rules.canManageUsers,
            update: rules.canManageUsers
        }
    },
    ui: {
        // hide the backend UI from regular users
        hideCreate: (args)=>!permissions.canManageUsers(args)
        ,
        hideDelete: (args)=>!permissions.canManageUsers(args)
    },
    fields: {
        name: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        email: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            },
            isIndexed: 'unique',
            isFilterable: true
        }),
        password: (0,fields_namespaceObject.password)({
            validation: {
                isRequired: true
            }
        }),
        about: (0,fields_document_namespaceObject.document)(),
        avatar: (0,fields_namespaceObject.relationship)({
            ref: 'Asset'
        }),
        contactNumber: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        userType: (0,fields_namespaceObject.select)({
            type: 'enum',
            options: [
                {
                    label: 'Trainer',
                    value: 'trainer'
                },
                {
                    label: 'Gym Owner',
                    value: 'gymOwner'
                },
                {
                    label: 'Trainee',
                    value: 'trainee'
                }, 
            ]
        }),
        role: (0,fields_namespaceObject.relationship)({
            ref: 'Role.assignedTo',
            access: {
                create: permissions.canManageUsers,
                update: permissions.canManageUsers
            }
        }),
        asset: (0,fields_namespaceObject.relationship)({
            ref: 'Asset.author'
        })
    }
});

;// CONCATENATED MODULE: ../../schemas/dateFields.ts

const dateFields = {
    dateCreated: (0,fields_namespaceObject.timestamp)({
        defaultValue: {
            kind: 'now'
        },
        ui: {
            itemView: {
                fieldMode: 'hidden'
            },
            createView: {
                fieldMode: 'hidden'
            }
        }
    }),
    dateUpdated: (0,fields_namespaceObject.timestamp)({
        defaultValue: {
            kind: 'now'
        },
        ui: {
            itemView: {
                fieldMode: 'hidden'
            },
            createView: {
                fieldMode: 'hidden'
            }
        },
        db: {
            updatedAt: true
        }
    })
};

;// CONCATENATED MODULE: ../../schemas/getAuthorFieldProperties.ts
const getAuthorFieldProperties = ()=>{
    return {
        hooks: {
            resolveInput ({ operation , resolvedData , context  }) {
                var ref;
                // Default to the currently logged in user on create.
                if (operation === 'create' && !resolvedData.user && ((ref = context.session) === null || ref === void 0 ? void 0 : ref.itemId)) {
                    var ref1;
                    return {
                        connect: {
                            id: (ref1 = context.session) === null || ref1 === void 0 ? void 0 : ref1.itemId
                        }
                    };
                }
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return resolvedData.user;
            }
        },
        ui: {
            itemView: {
                fieldMode: 'hidden'
            },
            createView: {
                fieldMode: 'hidden'
            }
        }
    };
};

;// CONCATENATED MODULE: ../../schemas/Media/Asset.ts




const Asset = (0,core_namespaceObject.list)({
    fields: {
        file: (0,fields_namespaceObject.file)(),
        folder: (0,fields_namespaceObject.select)({
            type: 'enum',
            options: [
                {
                    label: 'Active',
                    value: 'active'
                },
                {
                    label: 'Inactive',
                    value: 'inactive'
                }, 
            ]
        }),
        altTitle: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        caption: (0,fields_namespaceObject.text)(),
        status: (0,fields_namespaceObject.select)({
            type: 'enum',
            options: [
                {
                    label: 'Active',
                    value: 'active'
                },
                {
                    label: 'Inactive',
                    value: 'inactive'
                }, 
            ]
        }),
        author: (0,fields_namespaceObject.relationship)({
            ref: 'User.asset',
            ...getAuthorFieldProperties()
        }),
        tags: (0,fields_namespaceObject.relationship)({
            ref: 'Tag',
            many: true
        }),
        ...dateFields
    }
});

;// CONCATENATED MODULE: ../../schemas/UserManagement/Role.ts





const Role = (0,core_namespaceObject.list)({
    access: {
        operation: {
            create: permissions.canManageRoles,
            query: permissions.canManageRoles,
            update: permissions.canManageRoles,
            delete: permissions.canManageRoles
        }
    },
    ui: {
        hideCreate: (args)=>!permissions.canManageRoles(args)
        ,
        hideDelete: (args)=>!permissions.canManageRoles(args)
        ,
        isHidden: (args)=>!permissions.canManageRoles(args)
    },
    fields: {
        name: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        handle: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        description: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        permissions: (0,fields_namespaceObject.checkbox)(),
        ...dateFields,
        ...permissionFields,
        assignedTo: (0,fields_namespaceObject.relationship)({
            ref: 'User.role',
            many: true,
            ui: {
                itemView: {
                    fieldMode: 'read'
                }
            }
        })
    }
});

;// CONCATENATED MODULE: ../../schemas/Taxonomies/Category.ts



const Category = (0,core_namespaceObject.list)({
    fields: {
        title: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        handle: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        ...dateFields
    }
});

;// CONCATENATED MODULE: ../../schemas/Taxonomies/Collection.ts




const Collection = (0,core_namespaceObject.list)({
    fields: {
        title: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        handle: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        // items:relationship(),
        author: (0,fields_namespaceObject.relationship)({
            ref: 'User',
            ...getAuthorFieldProperties()
        }),
        status: (0,fields_namespaceObject.select)({
            type: 'enum',
            options: [
                {
                    label: 'Active',
                    value: 'active'
                },
                {
                    label: 'Inactive',
                    value: 'inactive'
                }, 
            ]
        }),
        tags: (0,fields_namespaceObject.relationship)({
            ref: 'Tag',
            many: true
        }),
        ...dateFields
    }
});

;// CONCATENATED MODULE: ../../schemas/Taxonomies/Structure.ts



const Structure = (0,core_namespaceObject.list)({
    fields: {
        name: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        handle: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        structure: (0,fields_namespaceObject.json)(),
        ...dateFields
    }
});

;// CONCATENATED MODULE: ../../schemas/Taxonomies/Tag.ts



const Tag = (0,core_namespaceObject.list)({
    fields: {
        title: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        handle: (0,fields_namespaceObject.text)({
            validation: {
                isRequired: true
            }
        }),
        tagType: (0,fields_namespaceObject.relationship)({
            ref: 'Structure'
        }),
        // listings: relationship({ ref: 'Listing.tags', many: true }),
        // stores: relationship({ ref: 'Store.tags', many: true }),
        // animals: relationship({ ref: 'Animal.tags', many: true }),
        // articles: relationship({ ref: 'Article.tags', many: true }),
        // events: relationship({ ref: 'Event.tags', many: true }),
        // pages: relationship({ ref: 'Page.tags', many: true }),
        // traits: relationship({ ref: 'Trait.tags', many: true }),
        // groups: relationship({ ref: 'Group.tags', many: true }),
        // organizations: relationship({ ref: 'Organization.tags' }),
        ...dateFields
    }
});

;// CONCATENATED MODULE: ../../schemas/index.ts








;// CONCATENATED MODULE: ../../keystone.ts







const databaseURL = process.env.DATABASE_URL || 'postgres://postgres:example1254@localhost:5432/keystone';
let context;
/* harmony default export */ const keystone = (withAuth((0,core_namespaceObject.config)({
    server: {
        cors: {
            origin: [
                process.env.FRONTEND_URL
            ],
            credentials: true
        },
        healthCheck: {
            path: '/health-check',
            data: ()=>({
                    status: 'keystone healthy',
                    timestamp: Date.now(),
                    uptime: process.uptime()
                })
        },
        port: parseInt(process.env.PORT || '3000'),
        extendExpressApp: extendExpressApp
    },
    db: {
        provider: 'postgresql',
        url: databaseURL,
        async onConnect (context1) {
            console.log('Connected to the database!');
            if (process.argv.includes('--seed-data')) {
                await insertSeedData(context1.prisma);
            }
        }
    },
    images: {
        upload: 'local',
        local: {
            storagePath: 'public/images',
            baseUrl: '/images'
        }
    },
    lists: {
        ...schemas_namespaceObject
    },
    extendGraphqlSchema: extendGraphqlSchema,
    ui: {
        // Show the UI only for people who pass this test
        isAccessAllowed: ({ session: session1  })=>{
            return !!(session1 === null || session1 === void 0 ? void 0 : session1.data);
        }
    },
    session: session
})));

;// CONCATENATED MODULE: ./pages/api/__keystone_api_build.js

/* harmony default export */ function _keystone_api_build(req, res) {
    return res.status(500);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2663));
module.exports = __webpack_exports__;

})();