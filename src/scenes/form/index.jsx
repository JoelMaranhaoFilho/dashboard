import { Box, Button, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

// ... (importações anteriores)

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {/* ... Outros campos existentes ... */}
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="RG"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rg}
                name="rg"
                error={!!touched.rg && !!errors.rg}
                helperText={touched.rg && errors.rg}
                sx={{ gridColumn: "span 4" }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="CPF"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cpf}
                name="cpf"
                error={!!touched.cpf && !!errors.cpf}
                helperText={touched.cpf && errors.cpf}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                select
                variant="filled"
                label="Estado"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.estado}
                name="estado"
                error={!!touched.estado && !!errors.estado}
                helperText={touched.estado && errors.estado}
                sx={{ gridColumn: "span 2" }}
              >
                {/* Opções de Estado */}
                <MenuItem value="sp">São Paulo</MenuItem>
                <MenuItem value="rj">Rio de Janeiro</MenuItem>
                {/* Adicione mais estados conforme necessário */}
              </TextField>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cidade"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cidade}
                name="cidade"
                error={!!touched.cidade && !!errors.cidade}
                helperText={touched.cidade && errors.cidade}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Departamento/Secretaria"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.departamento}
                name="departamento"
                error={!!touched.departamento && !!errors.departamento}
                helperText={touched.departamento && errors.departamento}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cargo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cargo}
                name="cargo"
                error={!!touched.cargo && !!errors.cargo}
                helperText={touched.cargo && errors.cargo}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                select
                variant="filled"
                label="Estado do Projeto"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.estadoProjeto}
                name="estadoProjeto"
                error={!!touched.estadoProjeto && !!errors.estadoProjeto}
                helperText={touched.estadoProjeto && errors.estadoProjeto}
                sx={{ gridColumn: "span 2" }}
              >
                {/* Opções de Estado do Projeto */}
                <MenuItem value="sp">São Paulo</MenuItem>
                <MenuItem value="rj">Rio de Janeiro</MenuItem>
                {/* Adicione mais estados conforme necessário */}
              </TextField>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cidade do Projeto"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cidadeProjeto}
                name="cidadeProjeto"
                error={!!touched.cidadeProjeto && !!errors.cidadeProjeto}
                helperText={touched.cidadeProjeto && errors.cidadeProjeto}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                select
                variant="filled"
                label="Nome do Projeto"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nomeProjeto}
                name="nomeProjeto"
                error={!!touched.nomeProjeto && !!errors.nomeProjeto}
                helperText={touched.nomeProjeto && errors.nomeProjeto}
                sx={{ gridColumn: "span 4" }}
              >
                {/* Opções de Nome do Projeto */}
                <MenuItem value="projeto1">Projeto 1</MenuItem>
                <MenuItem value="projeto2">Projeto 2</MenuItem>
                {/* Adicione mais projetos conforme necessário */}
              </TextField>

              <TextField
                fullWidth
                type="text"
                variant="filled"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                type="password"
                variant="filled"
                label="Senha"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.senha}
                name="senha"
                error={!!touched.senha && !!errors.senha}
                helperText={touched.senha && errors.senha}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                type="file"
                variant="filled"
                label="Logo do Projeto"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.logoProjeto}
                name="logoProjeto"
                error={!!touched.logoProjeto && !!errors.logoProjeto}
                helperText={touched.logoProjeto && errors.logoProjeto}
                sx={{ gridColumn: "span 4" }}
              />

              {/* ... Outros campos existentes ... */}

            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  // ... Outras validações existentes ...

  rg: yup.string().required("required"),
  cpf: yup.string().required("required"),
  estado: yup.string().required("required"),
  cidade: yup.string().required("required"),
  departamento: yup.string().required("required"),
  cargo: yup.string().required("required"),
  estadoProjeto: yup.string().required("required"),
  cidadeProjeto: yup.string().required("required"),
  nomeProjeto: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  senha: yup.string().required("required"),
  logoProjeto: yup.mixed().required("required").nullable(),
});

const initialValues = {
  // ... Outros valores iniciais existentes ...

  rg: "",
  cpf: "",
  estado: "",
  cidade: "",
  departamento: "",
  cargo: "",
  estadoProjeto: "",
  cidadeProjeto: "",
  nomeProjeto: "",
  email: "",
  senha: "",
  logoProjeto: null,
};

export default Form;